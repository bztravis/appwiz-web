'use client'

import { HatButton } from '@/Hat/HatButton'
import { HatFlex } from '@/Hat/HatFlex'
import { HatText } from '@/Hat/HatText'
import { useUser } from '@/hooks/useUser'
import { getPageTitle } from '@/utils/getPageTitle'
import { supabase } from '@/utils/supabase/client'
import { toast } from 'sonner'

export default function Page() {
  const user = useUser()

  return (
    <>
      <title>{getPageTitle('My Tasks')}</title>

      <HatFlex.Col gap="sm">
        {user.email}

        <HatText.p>My Tasks</HatText.p>

        <HatButton onClick={() => toast.success('Yahoo!')}>Toast</HatButton>
      </HatFlex.Col>
    </>
  )
}
