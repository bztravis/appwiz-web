import LogoIcon from '../../assets/icons/Logo.svg'
import styles from './LoadingLayout.module.scss'

export function LoadingLayout() {
  return (
    <div className={styles.container}>
      <LogoIcon />
    </div>
  )
}
