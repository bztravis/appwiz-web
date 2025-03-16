import styleBuilder from '@/utils/styleBuilder'
import styles from './HatFlex.module.scss'
import { HatPadding } from '../HatPadding'
import { ALIGN, GAP, HatBaseProps, JUSTIFY } from '../utils'

export type SpaceSize =
  | 'none'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'
  | 'xxxl'

export type HatFlexProps = {
  justify?: 'start' | 'end' | 'center' | 'between'
  align?: 'start' | 'end' | 'center' | 'stretch'
  gap?: SpaceSize
  wrap?: boolean
  fitContent?: boolean
  padding?: SpaceSize
  children?: React.ReactNode
} & HatBaseProps

const DEFAULT_JUSTIFY: HatFlexProps['justify'] = 'start'
const DEFAULT_ALIGN: HatFlexProps['align'] = 'stretch'
const DEFAULT_GAP: HatFlexProps['gap'] = 'none'
const DEFAULT_WRAP: HatFlexProps['wrap'] = false
const DEFAULT_FIT_CONTENT: HatFlexProps['fitContent'] = false
const DEFAULT_PADDING: HatFlexProps['padding'] = 'none'

export const HatFlex = {
  Row: ({
    justify = DEFAULT_JUSTIFY,
    align = DEFAULT_ALIGN,
    gap = DEFAULT_GAP,
    wrap = DEFAULT_WRAP,
    fitContent = DEFAULT_FIT_CONTENT,
    padding = DEFAULT_PADDING,
    children,
    ...restProps
  }: HatFlexProps) => (
    <HatPadding _fitContent={fitContent} size={padding} {...restProps}>
      <div
        className={styleBuilder([
          styles.base,
          styles.row,
          styles[JUSTIFY[justify]],
          styles[ALIGN[align]],
          styles[GAP[gap]],
          [styles.wrap, wrap],
          [styles.fitContent, fitContent],
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
    wrap = DEFAULT_WRAP,
    fitContent = DEFAULT_FIT_CONTENT,
    padding = DEFAULT_PADDING,
    children,
    ...restProps
  }: HatFlexProps) => (
    <HatPadding _fitContent={fitContent} size={padding} {...restProps}>
      <div
        className={styleBuilder([
          styles.base,
          styles.col,
          styles[JUSTIFY[justify]],
          styles[ALIGN[align]],
          styles[GAP[gap]],
          [styles.wrap, wrap],
          [styles.fitContent, fitContent],
        ])}
      >
        {children}
      </div>
    </HatPadding>
  ),
}
