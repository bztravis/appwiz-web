'use client'

import styleBuilder from '@/utils/styleBuilder'
import styles from './HatButton.module.scss'
import Link from 'next/link'

type HatButtonColor =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'destructive'
  | 'constructive'

type ButtonProps = {
  size?: 'md' | 'lg'
  color?: HatButtonColor
  icon?: React.ReactNode
  iconSide?: 'left' | 'right'
  disabled?: boolean
  children?: React.ReactNode
} & (
  | {
      to?: string
      type?: never
      onClick?: never
    }
  | {
      to?: never
      type?: 'button' | 'submit' | 'reset'
      onClick?: () => void
    }
)

export function HatButton({
  size = 'md',
  color = 'primary',
  icon,
  iconSide = 'left',
  disabled = false,
  type = 'button',
  to,
  onClick,
  children,
}: ButtonProps) {
  const className = styleBuilder([
    styles.base,
    styles[size],
    styles[color],
    [styles.disabled, disabled],
  ])

  if (to) {
    return (
      <Link className={className} href={to}>
        {icon && iconSide === 'left' && icon}

        {children}

        {icon && iconSide === 'right' && icon}
      </Link>
    )
  }

  return (
    <button className={className} onClick={onClick} type={type}>
      {icon && iconSide === 'left' && icon}

      {children}

      {icon && iconSide === 'right' && icon}
    </button>
  )
}
