import styleBuilder from '@/utils/styleBuilder'
import type { SpaceSize } from '../HatFlex'
import styles from './HatPadding.module.scss'

type HatPaddingProps = {
  size?: SpaceSize
  children?: React.ReactNode
}

export function HatPadding({ size = 'md', children }: HatPaddingProps) {
  return <div className={styleBuilder([styles[size]])}>{children}</div>
}
