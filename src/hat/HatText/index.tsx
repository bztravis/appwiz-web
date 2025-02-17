'use client'

import styleBuilder from '@/utils/styleBuilder'
import styles from './HatText.module.scss'

type HatTextColor =
  | 'primary'
  | 'hushed'
  | 'faint'
  | 'constructive'
  | 'destructive'

type HatTextProps = {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'billboard'
  color?: HatTextColor
  children?: React.ReactNode
}

export function HatText({
  size = 'sm',
  color = 'primary',
  children,
}: HatTextProps) {
  return (
    <span className={styleBuilder([styles.base, styles[size], styles[color]])}>
      {children}
    </span>
  )
}

HatText.h1 = ({ size = 'sm', color = 'primary', children }: HatTextProps) => (
  <h1
    className={styleBuilder([
      styles.base,
      styles.header,
      styles[size],
      styles[color],
    ])}
  >
    {children}
  </h1>
)

HatText.h2 = ({ size = 'sm', color = 'primary', children }: HatTextProps) => (
  <h2
    className={styleBuilder([
      styles.base,
      styles.header,
      styles[size],
      styles[color],
    ])}
  >
    {children}
  </h2>
)

HatText.h3 = ({ size = 'sm', color = 'primary', children }: HatTextProps) => (
  <h3
    className={styleBuilder([
      styles.base,
      styles.header,
      styles[size],
      styles[color],
    ])}
  >
    {children}
  </h3>
)

HatText.h4 = ({ size = 'sm', color = 'primary', children }: HatTextProps) => (
  <h4
    className={styleBuilder([
      styles.base,
      styles.header,
      styles[size],
      styles[color],
    ])}
  >
    {children}
  </h4>
)

HatText.h5 = ({ size = 'sm', color = 'primary', children }: HatTextProps) => (
  <h5
    className={styleBuilder([
      styles.base,
      styles.header,
      styles[size],
      styles[color],
    ])}
  >
    {children}
  </h5>
)

HatText.h6 = ({ size = 'sm', color = 'primary', children }: HatTextProps) => (
  <h6
    className={styleBuilder([
      styles.base,
      styles.header,
      styles[size],
      styles[color],
    ])}
  >
    {children}
  </h6>
)

HatText.p = ({ size = 'sm', color = 'primary', children }: HatTextProps) => (
  <p className={styleBuilder([styles.base, styles[size], styles[color]])}>
    {children}
  </p>
)
