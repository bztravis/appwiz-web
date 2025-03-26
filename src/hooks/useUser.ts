import { use } from 'react'
import { AuthContext } from '../utils/AuthProvider'
import { User } from '@supabase/supabase-js'
import { useSuspenseQuery } from '@tanstack/react-query'
import { supabase } from '@/utils/supabase/client'

export function useUser() {
  const context = use(AuthContext)

  return context.user as User
}

type Profile = {
  id: string
  created_at: string
  name: string
  preferences: Record<string, unknown>
}

export function useProfile(): Profile {
  const user = useUser()

  const { data } = useSuspenseQuery({
    queryKey: ['profile', user.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single()

      if (error) {
        throw new Error(error.message)
      }

      return data
    },
  })

  return data
}
