'use client'

import { createContext, useEffect, useState } from 'react'
import type { Session, User } from '@supabase/supabase-js'
import { supabase } from './supabase/client'
import { LoadingLayout } from '@/components/LoadingLayout'

export type AuthState = { session: Session | null; user: User | null }

const initialState: AuthState = { session: null, user: null }
export const AuthContext = createContext(initialState)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)
  const [authState, setAuthState] = useState<AuthState>(initialState)

  useEffect(() => {
    ;(async () => {
      setLoading(true)

      const { data } = await supabase.auth.getSession()

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
  }, [])

  return loading ? (
    <LoadingLayout />
  ) : (
    <AuthContext value={authState}>{children}</AuthContext>
  )
}
