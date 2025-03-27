'use client'

import { useProfile } from '@/hooks/useUser'
import { useLayoutEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { LoadingLayout } from './LoadingLayout'

export function AccountSetupGuard({ children }: { children: React.ReactNode }) {
  const profile = useProfile()
  const router = useRouter()
  const pathname = usePathname()

  const shouldOnboard = !profile.name

  const redirectToOnboarding = shouldOnboard && pathname !== '/setup'
  const redirectToHome = !shouldOnboard && pathname === '/setup'

  useLayoutEffect(() => {
    if (redirectToOnboarding) {
      router.replace('/setup')
    } else if (redirectToHome) {
      router.replace('/')
    }
  })

  if (redirectToOnboarding) {
    return <LoadingLayout />
  }

  if (redirectToHome) {
    return <LoadingLayout />
  }

  return children
}
