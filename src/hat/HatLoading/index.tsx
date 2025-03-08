import { HatBaseProps } from '../utils'
import LoaderLine from '../../assets/icons/LoaderLine.svg'
import LoaderLineLg from '../../assets/icons/LoaderLineLg.svg'
import styles from './HatLoading.module.scss'

type HatLoadingProps = {
  size?: 'md' | 'lg'
} & HatBaseProps

export function HatLoading({ size = 'md' }: HatLoadingProps) {
  return size === 'md' ? (
    <LoaderLine className={styles.spin} />
  ) : (
    <LoaderLineLg className={styles.spin} />
  )
}
