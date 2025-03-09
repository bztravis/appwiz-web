import type { HatTextColor } from '@/Hat/HatText'
import AppWizLogo from '@/assets/icons/Logo.svg'
import styles from './Logo.module.scss'

type LogoProps = {
  size: 'md'
  color?: HatTextColor
}

export function Logo({ color = 'primary' }: LogoProps) {
  return (
    <div className={styles[color]}>
      <AppWizLogo />
    </div>
  )
}
