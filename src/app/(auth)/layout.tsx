'use client'

import React from 'react'
import { AuthProvider } from '@/utils/AuthProvider'
import { Toaster } from 'sonner'
import { usePathname } from 'next/navigation'

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  console.log({ pathname })

  return (
    <AuthProvider>
      <Toaster expand={true} />

      {children}
    </AuthProvider>
  )
}
