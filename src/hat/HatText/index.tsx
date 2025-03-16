// todo: use factory

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
  align?: 'left' | 'center' | 'right' | 'justify'
  children?: React.ReactNode
} & HatBaseProps

export const DEFAULT_HAT_TEXT_SIZE = 'sm'
const DEFAULT_HAT_TEXT_COLOR = 'primary'
const DEFAULT_HAT_TEXT_ALIGN = 'left'

export function HatText({
  size = DEFAULT_HAT_TEXT_SIZE,
  color = DEFAULT_HAT_TEXT_COLOR,
  align = DEFAULT_HAT_TEXT_ALIGN,
  children,
  id,
  ariaLabel,
  ariaLabelledBy,
  ariaDescribedBy,
  ariaRole,
  ...restProps
}: HatTextProps) {
  return (
    <span
      className={styleBuilder([
        styles.base,
        styles.span,
        styles[size],
        styles[color],
        styles[align],
      ])}
      id={id}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
      role={ariaRole}
      {...restProps}
    >
      {children}
    </span>
  )
}

HatText.h1 = ({
  size = DEFAULT_HAT_TEXT_SIZE,
  color = DEFAULT_HAT_TEXT_COLOR,
  align = DEFAULT_HAT_TEXT_ALIGN,
  children,
  id,
  ariaLabel,
  ariaLabelledBy,
  ariaDescribedBy,
  ariaRole,
  ...restProps
}: HatTextProps) => (
  <h1
    className={styleBuilder([
      styles.base,
      styles[size],
      styles[color],
      styles[align],
    ])}
    id={id}
    aria-label={ariaLabel}
    aria-labelledby={ariaLabelledBy}
    aria-describedby={ariaDescribedBy}
    role={ariaRole}
    {...restProps}
  >
    {children}
  </h1>
)

HatText.h2 = ({
  size = DEFAULT_HAT_TEXT_SIZE,
  color = DEFAULT_HAT_TEXT_COLOR,
  align = DEFAULT_HAT_TEXT_ALIGN,
  children,
  id,
  ariaLabel,
  ariaLabelledBy,
  ariaDescribedBy,
  ariaRole,
  ...restProps
}: HatTextProps) => (
  <h2
    className={styleBuilder([
      styles.base,
      styles[size],
      styles[color],
      styles[align],
    ])}
    id={id}
    aria-label={ariaLabel}
    aria-labelledby={ariaLabelledBy}
    aria-describedby={ariaDescribedBy}
    role={ariaRole}
    {...restProps}
  >
    {children}
  </h2>
)

HatText.h3 = ({
  size = DEFAULT_HAT_TEXT_SIZE,
  color = DEFAULT_HAT_TEXT_COLOR,
  align = DEFAULT_HAT_TEXT_ALIGN,
  children,
  id,
  ariaLabel,
  ariaLabelledBy,
  ariaDescribedBy,
  ariaRole,
  ...restProps
}: HatTextProps) => (
  <h3
    className={styleBuilder([
      styles.base,
      styles[size],
      styles[color],
      styles[align],
    ])}
    id={id}
    aria-label={ariaLabel}
    aria-labelledby={ariaLabelledBy}
    aria-describedby={ariaDescribedBy}
    role={ariaRole}
    {...restProps}
  >
    {children}
  </h3>
)

HatText.h4 = ({
  size = DEFAULT_HAT_TEXT_SIZE,
  color = DEFAULT_HAT_TEXT_COLOR,
  align = DEFAULT_HAT_TEXT_ALIGN,
  children,
  id,
  ariaLabel,
  ariaLabelledBy,
  ariaDescribedBy,
  ariaRole,
  ...restProps
}: HatTextProps) => (
  <h4
    className={styleBuilder([
      styles.base,
      styles[size],
      styles[color],
      styles[align],
    ])}
    id={id}
    aria-label={ariaLabel}
    aria-labelledby={ariaLabelledBy}
    aria-describedby={ariaDescribedBy}
    role={ariaRole}
    {...restProps}
  >
    {children}
  </h4>
)

HatText.h5 = ({
  size = DEFAULT_HAT_TEXT_SIZE,
  color = DEFAULT_HAT_TEXT_COLOR,
  align = DEFAULT_HAT_TEXT_ALIGN,
  children,
  id,
  ariaLabel,
  ariaLabelledBy,
  ariaDescribedBy,
  ariaRole,
  ...restProps
}: HatTextProps) => (
  <h5
    className={styleBuilder([
      styles.base,
      styles[size],
      styles[color],
      styles[align],
    ])}
    id={id}
    aria-label={ariaLabel}
    aria-labelledby={ariaLabelledBy}
    aria-describedby={ariaDescribedBy}
    role={ariaRole}
    {...restProps}
  >
    {children}
  </h5>
)

HatText.h6 = ({
  size = DEFAULT_HAT_TEXT_SIZE,
  color = DEFAULT_HAT_TEXT_COLOR,
  align = DEFAULT_HAT_TEXT_ALIGN,
  children,
  id,
  ariaLabel,
  ariaLabelledBy,
  ariaDescribedBy,
  ariaRole,
  ...restProps
}: HatTextProps) => (
  <h6
    className={styleBuilder([
      styles.base,
      styles[size],
      styles[color],
      styles[align],
    ])}
    id={id}
    aria-label={ariaLabel}
    aria-labelledby={ariaLabelledBy}
    aria-describedby={ariaDescribedBy}
    role={ariaRole}
    {...restProps}
  >
    {children}
  </h6>
)

HatText.p = ({
  size = DEFAULT_HAT_TEXT_SIZE,
  color = DEFAULT_HAT_TEXT_COLOR,
  align = DEFAULT_HAT_TEXT_ALIGN,
  children,
  id,
  ariaLabel,
  ariaLabelledBy,
  ariaDescribedBy,
  ariaRole,
  ...restProps
}: HatTextProps) => {
  return (
    <p
      className={styleBuilder([
        styles.base,
        styles[size],
        styles[color],
        styles[align],
      ])}
      id={id}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
      role={ariaRole}
      {...restProps}
    >
      {children}
    </p>
  )
}
