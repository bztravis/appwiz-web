'use client'

import { usePathname } from 'next/navigation'
import { SideBar } from '../SideBar'

import styles from './DashboardLayout.module.scss'

// todo: use localstorage for sidebar state e.g. groups expanded/collapsed

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className={styles.container}>
      {/* key used to re-render on pathname change to close menu on navigate on mobile */}
      <SideBar key={pathname} />

      <main>{children}</main>
    </div>
  )
}
