'use client'

import { useProfile } from '@/hooks/useUser'
import { useLayoutEffect } from 'react'
import { useRouter } from 'next/navigation'

export function AccountSetupGuard({ children }: { children: React.ReactNode }) {
  const profile = useProfile()
  const router = useRouter()

  useLayoutEffect(() => {
    if (!profile.name) {
      router.replace('/setup')
    }
  })

  return children
}
