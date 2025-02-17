import type { HatTextColor } from '@/hat/HatText'
import LogoBlack from '@/assets/icons/LogoBlack.svg'

type LogoProps = {
  size?: 'md'
  color?: HatTextColor
}

export function Logo({ size, color }: LogoProps) {
  return <LogoBlack />
}
