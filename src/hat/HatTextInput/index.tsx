'use client'

import styleBuilder from '@/utils/styleBuilder'
import { HatFlex } from '../HatFlex'
import { HatText } from '../HatText'
import styles from './HatTextInput.module.scss'
import { useId } from 'react'
import { useFormContext } from 'react-hook-form'
import { HatPadding } from '../HatPadding'
import { HatBaseProps } from '../utils'

type HatTextInputProps = {
  type?: 'text' | 'password' | 'email' | 'number'
  size?: 'md' | 'lg'
  name: string
  label?: string | React.ReactNode
  placeholder?: string
  hint?: string
  required?: boolean
  disabled?: boolean
  // error?: string | FieldErrors<FormFields>
} & HatBaseProps

export function HatTextInput({
  size = 'md',
  name,
  label,
  placeholder,
  hint,
  type = 'text',
  disabled = false,
  required = false,
}: // error,
HatTextInputProps) {
  const inputId = useId()
  const errorId = useId()
  const hintId = useId()

  const {
    register,
    formState: { errors },
  } = useFormContext()

  const error = errors[name]

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
            {...register(name)}
          />

          {error && (
            <HatPadding sizeHorizontal="sm">
              <HatText
                size="xs"
                color="destructive"
                id={hintId}
                ariaRole="alert"
              >
                {typeof error === 'string' ? error : (error.message as string)}
                {/* fixme: type */}
              </HatText>
            </HatPadding>
          )}

          {hint && (
            <HatPadding sizeHorizontal="sm">
              <HatText size="xs" color="hushed" id={errorId}>
                {hint}
              </HatText>
            </HatPadding>
          )}
        </HatFlex.Col>
      </HatFlex.Col>
    </div>
  )
}
