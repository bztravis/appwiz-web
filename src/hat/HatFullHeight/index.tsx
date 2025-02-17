import styles from './HatFullHeight.module.scss'

export function HatFullHeight({ children }: { children: React.ReactNode }) {
  return <div className={styles.base}>{children}</div>
}
