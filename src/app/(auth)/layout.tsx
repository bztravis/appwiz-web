'use client'

import React from 'react'
import { AuthProvider } from '@/utils/AuthProvider'
import { Toaster } from 'sonner'
import { HatModalProvider } from '@/Hat/HatModal/HatModalContext'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/utils/tanstackQuery'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <HatModalProvider>
          <Toaster expand={true} />

          {children}
        </HatModalProvider>
      </QueryClientProvider>
    </AuthProvider>
  )
}
