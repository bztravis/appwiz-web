'use client'

import { toast } from '@/utils/toast'
import { HatButton } from '@/Hat/HatButton'
import { HatFlex } from '@/Hat/HatFlex'
import { useUser } from '@/hooks/useUser'
import { supabase } from '@/utils/supabase/client'

export default function Home() {
  const user = useUser()

  return (
    <HatFlex.Col gap="sm">
      {user.email}

      <HatButton
        onClick={async () => {
          const { error } = await supabase.auth.signOut()
          if (error) console.error('Sign out error', error)
          window.location.href = '/login'
        }}
      >
        Sign out
      </HatButton>

      <HatButton onClick={() => toast.success('Yahoo!')}>Toast</HatButton>
    </HatFlex.Col>
  )
}
