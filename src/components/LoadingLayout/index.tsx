import { LoadingPulse } from '../LoadingPulse'
import styles from './LoadingLayout.module.scss'

export function LoadingLayout() {
  return (
    <div className={styles.container}>
      <LoadingPulse />
    </div>
  )
}
