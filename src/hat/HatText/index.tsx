'use client'

import styleBuilder from '@/utils/styleBuilder'
import styles from './HatText.module.scss'
import { HatBaseProps } from '../utils'

export type HatTextColor =
  | 'primary'
  | 'hushed'
  | 'faint'
  | 'constructive'
  | 'destructive'

export type HatTextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'billboard'

export type HatTextProps = {
  size?: HatTextSize
  color?: HatTextColor
  children?: React.ReactNode
} & HatBaseProps

export const DEFAULT_HAT_TEXT_SIZE = 'sm'
const DEFAULT_HAT_TEXT_COLOR = 'primary'

export function HatText({
  size = DEFAULT_HAT_TEXT_SIZE,
  color = DEFAULT_HAT_TEXT_COLOR,
  children,
}: HatTextProps) {
  return (
    <span className={styleBuilder([styles.base, styles[size], styles[color]])}>
      {children}
    </span>
  )
}

HatText.h1 = ({
  size = DEFAULT_HAT_TEXT_SIZE,
  color = DEFAULT_HAT_TEXT_COLOR,
  children,
}: HatTextProps) => (
  <h1 className={styleBuilder([styles.base, styles[size], styles[color]])}>
    {children}
  </h1>
)

HatText.h2 = ({
  size = DEFAULT_HAT_TEXT_SIZE,
  color = DEFAULT_HAT_TEXT_COLOR,
  children,
}: HatTextProps) => (
  <h2 className={styleBuilder([styles.base, styles[size], styles[color]])}>
    {children}
  </h2>
)

HatText.h3 = ({
  size = DEFAULT_HAT_TEXT_SIZE,
  color = DEFAULT_HAT_TEXT_COLOR,
  children,
}: HatTextProps) => (
  <h3 className={styleBuilder([styles.base, styles[size], styles[color]])}>
    {children}
  </h3>
)

HatText.h4 = ({
  size = DEFAULT_HAT_TEXT_SIZE,
  color = DEFAULT_HAT_TEXT_COLOR,
  children,
}: HatTextProps) => (
  <h4 className={styleBuilder([styles.base, styles[size], styles[color]])}>
    {children}
  </h4>
)

HatText.h5 = ({
  size = DEFAULT_HAT_TEXT_SIZE,
  color = DEFAULT_HAT_TEXT_COLOR,
  children,
}: HatTextProps) => (
  <h5 className={styleBuilder([styles.base, styles[size], styles[color]])}>
    {children}
  </h5>
)

HatText.h6 = ({
  size = DEFAULT_HAT_TEXT_SIZE,
  color = DEFAULT_HAT_TEXT_COLOR,
  children,
}: HatTextProps) => (
  <h6 className={styleBuilder([styles.base, styles[size], styles[color]])}>
    {children}
  </h6>
)

HatText.p = ({
  size = DEFAULT_HAT_TEXT_SIZE,
  color = DEFAULT_HAT_TEXT_COLOR,
  children,
}: HatTextProps) => (
  <p className={styleBuilder([styles.base, styles[size], styles[color]])}>
    {children}
  </p>
)
