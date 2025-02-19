'use client'

import styleBuilder from '@/utils/styleBuilder'
import styles from './HatButton.module.scss'

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
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  children?: React.ReactNode
}

export function HatButton({
  size = 'md',
  color = 'primary',
  icon,
  iconSide = 'left',
  disabled = false,
  type = 'button',
  onClick,
  children,
}: ButtonProps) {
  const className = styleBuilder([
    styles.base,
    styles[size],
    styles[color],
    [styles.disabled, disabled],
  ])

  return (
    <button className={className} onClick={onClick} type={type}>
      {icon && iconSide === 'left' && icon}

      {children}

      {icon && iconSide === 'right' && icon}
    </button>
  )
}
