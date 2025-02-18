import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '../styles/global.scss'

const AppWizSatoshi = localFont({
  src: [
    {
      path: '../../public/fonts/Satoshi-Medium.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Satoshi-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
})

export const metadata: Metadata = {
  title: 'AppWiz',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={AppWizSatoshi.className}>{children}</body>
    </html>
  )
}
