import styleBuilder from '@/utils/styleBuilder'
import type { HatFlexProps, SpaceSize } from '../HatFlex'
import styles from './HatPadding.module.scss'
import { HatBaseProps, PADDING_X, PADDING_Y } from '../utils'

type HatPaddingBaseProps = {
  _fitContent?: HatFlexProps['fitContent']
  children?: React.ReactNode
} & (
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
  _fitContent,
  size,
  sizeVertical,
  sizeHorizontal,
  children,
  ...restProps
}: HatPaddingBaseProps) {
  const className = styleBuilder([
    styles.base,
    [styles.fitContent, !!_fitContent],
    ...(size ? [styles[PADDING_Y[size]], styles[PADDING_X[size]]] : []),
    ...(sizeVertical ? [styles[PADDING_Y[sizeVertical]]] : []),
    ...(sizeHorizontal ? [styles[PADDING_X[sizeHorizontal]]] : []),
  ])

  return (
    <div className={className} {...restProps}>
      {children}
    </div>
  )
}
