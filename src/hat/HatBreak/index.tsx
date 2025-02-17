import styleBuilder from '@/utils/styleBuilder'
import styles from './HatBreak.module.scss'
import type { SpaceSize } from '../HatFlex'
import { HatPadding } from '../HatPadding'

type HatBreakProps = {
  hr?: boolean
  paddingVertical?: SpaceSize
}

export function HatBreak({ hr = true, paddingVertical = 'md' }: HatBreakProps) {
  return (
    <HatPadding sizeVertical={paddingVertical}>
      {hr ? <hr className={styleBuilder([styles.base])} /> : null}
    </HatPadding>
  )
}
