import styleBuilder from '@/utils/styleBuilder'
import styles from './HatFlex.module.scss'
import { HatPadding } from '../HatPadding'

export type SpaceSize =
  | 'none'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'
  | 'xxxl'

type HatFlexProps = {
  justify?: 'start' | 'end' | 'center' | 'between'
  align?: 'start' | 'end' | 'center' | 'stretch'
  gap?: SpaceSize
  padding?: SpaceSize
  children?: React.ReactNode
}

const DEFAULT_JUSTIFY: HatFlexProps['justify'] = 'start'
const DEFAULT_ALIGN: HatFlexProps['align'] = 'start'
const DEFAULT_GAP: HatFlexProps['gap'] = 'none'
const DEFAULT_PADDING: HatFlexProps['padding'] = 'none'

export const HatFlex = {
  Row: ({
    justify = DEFAULT_JUSTIFY,
    align = DEFAULT_ALIGN,
    gap = DEFAULT_GAP,
    padding = DEFAULT_PADDING,
    children,
  }: HatFlexProps) => (
    <HatPadding size={padding}>
      <div
        className={styleBuilder([
          styles.base,
          styles.row,
          styles['justify-' + justify],
          styles['align-' + align],
          styles['gap-' + gap],
          styles['padding-' + padding],
        ])}
      >
        {children}
      </div>
    </HatPadding>
  ),

  Col: ({
    justify = DEFAULT_JUSTIFY,
    align = DEFAULT_ALIGN,
    gap = DEFAULT_GAP,
    padding = DEFAULT_PADDING,
    children,
  }: HatFlexProps) => (
    <HatPadding size={padding}>
      <div
        className={styleBuilder([
          styles.base,
          styles.col,
          styles['justify-' + justify],
          styles['align-' + align],
          styles['gap-' + gap],
          styles['padding-' + padding],
        ])}
      >
        {children}
      </div>
    </HatPadding>
  ),
}
