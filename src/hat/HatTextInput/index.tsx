'use client'

import styleBuilder from '@/utils/styleBuilder'
import { HatFlex } from '../HatFlex'
import { HatText } from '../HatText'
import styles from './HatTextInput.module.scss'
import { useId } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { HatPadding } from '../HatPadding'
import { HatBaseProps } from '../utils'

type FormFields = Record<string, unknown>

type HatTextInputProps = {
  type?: 'text' | 'password' | 'email' | 'number'
  size?: 'md' | 'lg'
  label?: string | React.ReactNode
  placeholder?: string
  hint?: string
  disabled?: boolean
  required?: boolean
  error?: FieldErrors<FormFields>
  registerProps?: ReturnType<UseFormRegister<FormFields>>
} & HatBaseProps

export function HatTextInput({
  size = 'md',
  label,
  placeholder,
  hint,
  type = 'text',
  disabled = false,
  required = false,
  error,
  registerProps,
}: HatTextInputProps) {
  const inputId = useId()
  const errorId = useId()
  const hintId = useId()

  return (
    <div
      className={styleBuilder([
        styles.base,
        [styles.hasError, !!error],
        styles[size],
      ])}
    >
      <HatFlex.Col gap="sm">
        {label && (
          <label htmlFor={inputId}>
            <HatText size="md">{label}</HatText>
          </label>
        )}

        <HatFlex.Col gap="xs">
          <input
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
            id={inputId}
            aria-describedby={`${hintId} ${errorId}`}
            {...registerProps}
          />

          {error && (
            <HatPadding sizeHorizontal="sm">
              <HatText.p size="xs" color="destructive" id={hintId}>
                {error.message as string} {/* fixme: type */}
              </HatText.p>
            </HatPadding>
          )}

          {hint && (
            <HatPadding sizeHorizontal="sm">
              <HatText.p size="xs" color="hushed" id={hintId}>
                {hint}
              </HatText.p>
            </HatPadding>
          )}
        </HatFlex.Col>
      </HatFlex.Col>
    </div>
  )
}
