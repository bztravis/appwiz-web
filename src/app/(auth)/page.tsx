'use client'

import { HatButton } from '@/Hat/HatButton'
import Link from 'next/link'
import { supabase } from '@/utils/supabase/client'

export default function Home() {
  return (
    <div>
      <Link href="/login">/login</Link>

      <HatButton
        onClick={async () => {
          const { error } = await supabase.auth.signOut()
          if (error) console.error('Sign out error', error)
          window.location.href = '/login'
        }}
      >
        Sign out
      </HatButton>
    </div>
  )
}
