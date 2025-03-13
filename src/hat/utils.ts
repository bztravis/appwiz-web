import { AriaRole } from 'react'
import { HatButtonProps } from './HatButton'
import { removeKey, removeKeys } from '@/utils/removeKey'

export type HatAccessibilityProps = {
  ariaLabel?: string
  ariaLabelledBy?: string
  ariaDescribedBy?: string
  ariaRole?: AriaRole
}

export type HatBaseProps = {
  id?: string
} & HatAccessibilityProps

export type HatActionProps = {
  label: string
  icon?: React.ReactNode
  disabled?: boolean
  buttonProps?: HatButtonProps
} & (
  | {
      to?: string
      onClick?: never
    }
  | {
      to?: never
      onClick?: () => void
    }
)

export function hatActionToButtonPropsResolver(
  action: HatActionProps
): HatButtonProps {
  return {
    icon: action.icon,
    disabled: action.disabled,
    ...(action.to
      ? {
          to: action.to,
          ...(action.buttonProps
            ? removeKeys(action.buttonProps, ['type', 'onClick'])
            : {}),
        }
      : {
          type: 'button',
          onClick: action.onClick,
          ...(action.buttonProps ? removeKey(action.buttonProps, 'to') : {}),
        }),
  }
}

export const JUSTIFY = {
  start: 'justifyStart',
  end: 'justifyEnd',
  center: 'justifyCenter',
  between: 'justifySpaceBetween',
} as const

export const ALIGN = {
  start: 'alignStart',
  end: 'alignEnd',
  center: 'alignCenter',
  stretch: 'alignStretch',
} as const

export const GAP = {
  none: 'gapNone',
  xs: 'gapXs',
  sm: 'gapSm',
  md: 'gapMd',
  lg: 'gapLg',
  xl: 'gapXl',
  xxl: 'gapXxl',
  xxxl: 'gapXxxl',
} as const

export const PADDING = {
  none: 'paddingNone',
  xs: 'paddingXs',
  sm: 'paddingSm',
  md: 'paddingMd',
  lg: 'paddingLg',
  xl: 'paddingXl',
  xxl: 'paddingXxl',
  xxxl: 'paddingXxxl',
} as const

export const PADDING_X = {
  none: 'paddingXNone',
  xs: 'paddingXXs',
  sm: 'paddingXSm',
  md: 'paddingXMd',
  lg: 'paddingXLg',
  xl: 'paddingXXl',
  xxl: 'paddingXXxl',
  xxxl: 'paddingXXxxl',
} as const

export const PADDING_Y = {
  none: 'paddingYNone',
  xs: 'paddingYXs',
  sm: 'paddingYSm',
  md: 'paddingYMd',
  lg: 'paddingYLg',
  xl: 'paddingYXl',
  xxl: 'paddingYXxl',
  xxxl: 'paddingYXxxl',
} as const
