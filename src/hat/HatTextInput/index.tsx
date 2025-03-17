'use client'

import styleBuilder from '@/utils/styleBuilder'
import { HatFlex } from '../HatFlex'
import { HatText } from '../HatText'
import styles from './HatTextInput.module.scss'
import { useId } from 'react'
import { HatPadding } from '../HatPadding'
import { HatBaseProps } from '../utils'
import { useHatFormContext } from '../HatForm'

type HatTextInputProps = {
  type?: 'text' | 'password' | 'email' | 'number'
  size?: 'md' | 'lg'
  name: string
  label?: string | React.ReactNode
  placeholder?: string
  hint?: string
  autoFocus?: boolean
  required?: boolean
  disabled?: boolean
  // error?: string | FieldErrors<FormFields>
} & HatBaseProps

export function HatTextInput({
  type = 'text',
  size = 'md',
  name,
  label,
  placeholder,
  hint,
  autoFocus = false,
  disabled = false,
  required = false,
}: // error,
HatTextInputProps) {
  const inputId = useId()
  const errorId = useId()
  const hintId = useId()

  const formContext = useHatFormContext()

  const register = formContext?.register
  const errors = formContext?.formState?.errors
  const isSubmitSuccessful = formContext?.formState?.isSubmitSuccessful

  const disableAfterSuccess = formContext?.disableAfterSuccess
  disabled = disabled || (!!isSubmitSuccessful && !!disableAfterSuccess)

  const error = errors?.[name]

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
            autoFocus={autoFocus}
            disabled={disabled}
            required={required}
            id={inputId}
            aria-describedby={`${hintId} ${errorId}`}
            {...(register && register(name))}
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
