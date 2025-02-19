import Link from 'next/link'

import styles from './HatLink.module.scss'
import {
  DEFAULT_HAT_TEXT_SIZE,
  HatText,
  HatTextColor,
  HatTextSize,
  type HatTextProps,
} from '../HatText'
import ArrowRightUpLine from '../../assets/icons/ArrowRightUpLine.svg'

type HatLinkProps = {
  size?: Extract<HatTextSize, 'sm' | 'md'>
  color?: HatTextColor
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
)

const DEFAULT_HAT_LINK_COLOR: HatTextProps['color'] = 'hushed'

export function HatLink({
  to,
  href,
  size = DEFAULT_HAT_TEXT_SIZE,
  color = DEFAULT_HAT_LINK_COLOR,
  children,
}: HatLinkProps) {
  if (to && to[0] === '/') {
    console.warn('HatLink: `href` used for internal link. Use `to` instead.')
  }

  return (
    <HatText size={size} color={color}>
      <Link href={to !== undefined ? to : href} className={styles.base}>
        {children}

        {href && <ArrowRightUpLine />}
      </Link>
    </HatText>
  )
}
