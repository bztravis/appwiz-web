import React from 'react'
import { AuthProvider } from '@/utils/AuthProvider'

export default function Layout({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>
}
