'use client'

import styleBuilder from '@/utils/styleBuilder'
import styles from './HatButton.module.scss'
import Link from 'next/link'
import { HatBaseProps } from '../utils'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { HatLoading } from '../HatLoading'

type HatButtonColor =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'destructive'
  | 'constructive'

type HatButtonProps = {
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
) &
  HatBaseProps

export function HatButton({
  size = 'md',
  color = 'primary',
  icon,
  iconSide = 'left',
  type = 'button',
  disabled = false,
  to,
  onClick,
  children,
}: HatButtonProps) {
  console.log('still fine')
  const formContext = useFormContext()

  const formSubmitting = formContext?.formState?.isSubmitting
  const formLoading = formContext?.formState?.isLoading
  const formDisabled = formContext?.formState?.disabled

  const [onClickPending, setOnClickPending] = useState<boolean>(false)

  const loading =
    (formSubmitting && type === 'submit') ||
    formLoading ||
    formDisabled ||
    onClickPending
  disabled = disabled || loading

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
    <button
      className={className}
      onClick={onClickWrapper}
      type={type}
      disabled={disabled}
    >
      {iconSide === 'left' && (loading ? <HatLoading /> : icon ?? null)}

      {children}

      {iconSide === 'right' && (loading ? <HatLoading /> : icon ?? null)}
    </button>
  )

  async function onClickWrapper() {
    if (!onClick) return

    setOnClickPending(true)
    await onClick()
    setOnClickPending(false)
  }
}
