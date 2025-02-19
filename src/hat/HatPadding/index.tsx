import styleBuilder from '@/utils/styleBuilder'
import type { SpaceSize } from '../HatFlex'
import styles from './HatPadding.module.scss'

type HatPaddingBaseProps = { children?: React.ReactNode } & (
  | {
      size?: SpaceSize
      sizeVertical?: never
      sizeHorizontal?: never
    }
  | {
      sizeVertical?: SpaceSize
      sizeHorizontal?: SpaceSize
      size?: never
    }
)

export function HatPadding({
  size,
  sizeVertical,
  sizeHorizontal,
  children,
}: HatPaddingBaseProps) {
  const className = styleBuilder([
    styles.base,
    ...(size ? [styles['padding-y-' + size], styles['padding-x-' + size]] : []),
    ...(sizeVertical ? [styles['padding-y-' + sizeVertical]] : []),
    ...(sizeHorizontal ? [styles['padding-x-' + sizeHorizontal]] : []),
  ])

  return <div className={className}>{children}</div>
}
