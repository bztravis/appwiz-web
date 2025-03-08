'use client'

import React from 'react'
import { AuthProvider } from '@/utils/AuthProvider'
import { Toaster } from 'sonner'
import { DashboardLayout } from '@/components/DashboardLayout'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <Toaster expand={true} />

      <DashboardLayout>{children}</DashboardLayout>
    </AuthProvider>
  )
}
