import Link from 'next/link'

import styles from './HatLink.module.scss'
import { HatText, HatTextColor, HatTextSize } from '../HatText'
import ArrowRightUpLine from '../../assets/icons/ArrowRightUpLine.svg'
import { HatBaseProps } from '../utils'
import styleBuilder from '@/utils/styleBuilder'

type HatLinkProps = {
  size?: Extract<HatTextSize, 'sm' | 'md'>
  color?: HatTextColor
  underline?: boolean
  children: React.ReactNode
} & (
  | {
      to: string
      href?: never
    }
  | {
      to?: never
      href: string
    }
) &
  HatBaseProps

const DEFAULT_HAT_LINK_COLOR = 'hushed'
const DEFAULT_HAT_LINK_UNDERLINE = true

export function HatLink({
  size,
  color = DEFAULT_HAT_LINK_COLOR,
  underline = DEFAULT_HAT_LINK_UNDERLINE,
  to,
  href,
  children,
}: HatLinkProps) {
  if (href && href[0] === '/') {
    console.warn('HatLink: `href` used for internal link. Use `to` instead.')
  }

  return (
    <Link
      href={to !== undefined ? to : href}
      className={styleBuilder([styles.base, [styles.underline, underline]])}
    >
      <HatText size={size} color={color}>
        {children}

        {href && <ArrowRightUpLine />}
      </HatText>
    </Link>
  )
}
