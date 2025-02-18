'use client'

import styleBuilder from '@/utils/styleBuilder'
import { HatFlex } from '../HatFlex'
import { HatText } from '../HatText'
import styles from './HatTextInput.module.scss'
import { useId } from 'react'

type HatTextInputProps = {
  size?: 'md'
  label?: string | React.ReactNode
  placeholder?: string
  type?: 'text' | 'password' | 'email' | 'number'
  disabled?: boolean
  required?: boolean
}

export function HatTextInput({
  size = 'md',
  label,
  placeholder,
  type = 'text',
  disabled = false,
  required = false,
}: HatTextInputProps) {
  const inputId = useId()

  return (
    <div className={styleBuilder([styles.base, styles[size]])}>
      <HatFlex.Col gap="sm">
        {label && (
          <label htmlFor={inputId}>
            <HatText size="md">{label}</HatText>
          </label>
        )}

        <input
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          id={inputId}
        />
      </HatFlex.Col>
    </div>
  )
}
