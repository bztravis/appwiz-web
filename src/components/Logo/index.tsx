import type { HatTextColor } from '@/Hat/HatText'
import LogoBlack from '@/assets/icons/LogoBlack.svg'
import styleBuilder from '@/utils/styleBuilder'
import styles from './Logo.module.scss'

type LogoProps = {
  size: 'md'
  color?: HatTextColor
}

export function Logo({ size, color = 'primary' }: LogoProps) {
  return (
    <span className={styleBuilder([styles[color]])}>
      <LogoBlack />
    </span>
  )
}
