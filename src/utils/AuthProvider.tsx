'use client'

import { createContext, useEffect, useState } from 'react'
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

  useEffect(() => {
    ;(async () => {
      setLoading(true)

      const { data } = await supabase.auth.getSession()

      if (!data?.session?.user) {
        router.replace('/login')
      }

      setAuthState({
        session: data.session,
        user: data.session?.user ?? null,
      })

      setLoading(false)
    })()

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setAuthState({ session, user: session?.user ?? null })
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [router])

  return loading || !authState.user ? (
    <LoadingLayout />
  ) : (
    <AuthContext value={authState}>{children}</AuthContext>
  )
}
