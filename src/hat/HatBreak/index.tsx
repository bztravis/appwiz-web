import styleBuilder from '@/utils/styleBuilder'
import styles from './HatBreak.module.scss'
import type { SpaceSize } from '../HatFlex'
import { HatPadding } from '../HatPadding'

type HatBreakProps = {
  paddingVertical?: SpaceSize
}

export function HatBreak({ paddingVertical = 'md' }: HatBreakProps) {
  return (
    <HatPadding sizeVertical={paddingVertical}>
      <hr className={styleBuilder([styles.base])} />
    </HatPadding>
  )
}
