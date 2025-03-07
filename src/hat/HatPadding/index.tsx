import styleBuilder from '@/utils/styleBuilder'
import type { SpaceSize } from '../HatFlex'
import styles from './HatPadding.module.scss'
import { HatBaseProps, PADDING_X, PADDING_Y } from '../utils'

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
) &
  HatBaseProps

export function HatPadding({
  size,
  sizeVertical,
  sizeHorizontal,
  children,
}: HatPaddingBaseProps) {
  const className = styleBuilder([
    styles.base,
    ...(size ? [styles[PADDING_Y[size]], styles[PADDING_X[size]]] : []),
    ...(sizeVertical ? [styles[PADDING_Y[sizeVertical]]] : []),
    ...(sizeHorizontal ? [styles[PADDING_X[sizeHorizontal]]] : []),
  ])

  return <div className={className}>{children}</div>
}
