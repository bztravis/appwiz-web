import { HatBaseProps } from '../utils'

type HatWidthClampProps = {
  sizeRem: string
  children?: React.ReactNode
} & HatBaseProps

export function HatWidthClamp({ sizeRem, children }: HatWidthClampProps) {
  return <div style={{ width: '100%', maxWidth: `${sizeRem}` }}>{children}</div>
}
