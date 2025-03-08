import { SideBar } from '../SideBar'

import styles from './DashboardLayout.module.scss'

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <SideBar />

      <main>{children}</main>
    </div>
  )
}
