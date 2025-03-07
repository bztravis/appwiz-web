import { HatBaseProps } from '../utils'
import styles from './HatFullHeight.module.scss'

export function HatFullHeight({
  children,
}: { children: React.ReactNode } & HatBaseProps) {
  return <div className={styles.base}>{children}</div>
}
