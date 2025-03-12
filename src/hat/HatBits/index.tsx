import { ReactNode } from 'react'
import { HatFlex } from '../HatFlex'
import BitDot from '../../assets/icons/BitDot.svg'
import { reactJoinWith } from '@/components/utils'
import { HatText } from '../HatText'

type HatBitsProps = {
  bits: (string | ReactNode)[]
}

export function HatBits({ bits }: HatBitsProps) {
  const components = reactJoinWith(
    bits,
    (bit) => <Segment bit={bit} />,
    <BitDot />
  )
  return (
    <HatFlex.Row align="center" gap="sm">
      {components}
    </HatFlex.Row>
  )
}

function Segment({ bit }: { bit: string | ReactNode }) {
  return (
    <HatText size="sm" color="faint">
      {bit}
    </HatText>
  )
}
