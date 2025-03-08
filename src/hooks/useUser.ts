import { use } from 'react'
import { AuthContext } from '../utils/AuthProvider'
import { useRouter } from 'next/navigation'
import { User } from '@supabase/supabase-js'

export function useUser() {
  const context = use(AuthContext)
  const router = useRouter()

  if (!context.user) {
    router.replace('/login')
  }

  return context.user as User
}
