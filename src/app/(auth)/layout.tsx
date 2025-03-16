'use client'

import React from 'react'
import { AuthProvider } from '@/utils/AuthProvider'
import { Toaster } from 'sonner'
import { HatModalProvider } from '@/Hat/HatModal/HatModalContext'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <HatModalProvider>
        <Toaster expand={true} />

        {children}
      </HatModalProvider>
    </AuthProvider>
  )
}
