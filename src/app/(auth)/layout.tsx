import { Logo } from '@/components/Logo'
import Link from 'next/link'
import styles from './layout.module.scss'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={styles.LoginRoot}>
      <Link href="/" aria-label="Home">
        <Logo size="md" />
      </Link>

      <div className={styles.FormContainer}>
        <div className={styles.widthClamp}>{children}</div>
      </div>
    </div>
  )
}
