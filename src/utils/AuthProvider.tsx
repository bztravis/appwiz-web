'use client'

import { createContext, useCallback, useEffect, useState } from 'react'
import type { Session, User } from '@supabase/supabase-js'
import { supabase } from './supabase/client'
import { LoadingLayout } from '@/components/LoadingLayout'
import { useRouter } from 'next/navigation'

export type AuthState = { session: Session | null; user: User | null }

const initialState: AuthState = { session: null, user: null }
export const AuthContext = createContext(initialState)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)
  const [authState, setAuthState] = useState<AuthState>(initialState)
  const router = useRouter()

  const updateAuthState = useCallback(
    (state: AuthState) => {
      if (!state.user) {
        router.replace('/login')
      }

      setAuthState(state)
    },
    [router]
  )

  useEffect(() => {
    ;(async () => {
      setLoading(true)

      try {
        const { data } = await supabase.auth.getSession()

        updateAuthState({
          session: data.session,
          user: data.session?.user ?? null,
        })
      } catch {
        router.replace('/login')
      }

      setLoading(false)
    })()

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      updateAuthState({ session, user: session?.user ?? null })
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [router, updateAuthState])

  return loading || !authState.user ? (
    <LoadingLayout />
  ) : (
    <AuthContext value={authState}>{children}</AuthContext>
  )
}
