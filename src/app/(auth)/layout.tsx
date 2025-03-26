'use client'

import React from 'react'
import { AuthProvider } from '@/utils/AuthProvider'
import { Toaster } from 'sonner'
import { HatModalProvider } from '@/Hat/HatModal/HatModalContext'
import { QueryClientProvider } from '@tanstack/react-query'
import { Prefetch } from '@/components/Prefetch'
import { queryClient } from '@/utils/tanstackQuery'
import { AccountSetupGuard } from '@/components/SetupGuard'
import { usePathname } from 'next/navigation'

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <HatModalProvider>
          <Toaster expand={true} />

          <Prefetch>
            <AccountSetupGuard key={pathname}>{children}</AccountSetupGuard>
          </Prefetch>
        </HatModalProvider>
      </QueryClientProvider>
    </AuthProvider>
  )
}
