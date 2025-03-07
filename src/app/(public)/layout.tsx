import { Logo } from '@/components/Logo'
import styles from './layout.module.scss'
import { HatLink } from '@/Hat/HatLink'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={styles.loginRoot}>
      <HatLink to="/" aria-label="Home">
        <Logo size="md" />
      </HatLink>

      <div className={styles.formContainer}>
        <div className={styles.widthClamp}>{children}</div>
      </div>
    </div>
  )
}
