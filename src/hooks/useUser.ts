import { use } from 'react'
import { AuthContext } from '../utils/AuthProvider'
import { User } from '@supabase/supabase-js'

export function useUser() {
  const context = use(AuthContext)

  return context.user as User
}
