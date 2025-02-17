'use client'

import { HatButton } from '@/Hat/HatButton'
import { HatText } from '@/Hat/HatText'
import { HatFlex } from '@/Hat/HatFlex'
import { Logo } from '@/components/Logo'
import { HatPadding } from '@/Hat/HatPadding'
import { HatBreak } from '@/Hat/HatBreak'
import { HatWidthClamp } from '@/Hat/HatWidthClamp'
import { pxToRem } from '@/utils/pxToRem'

export default function Home() {
  return (
    <div>
      <HatWidthClamp sizeRem={pxToRem(280)}>
        <HatFlex.Col align="stretch" gap="xs">
          <HatButton onClick={() => console.log('clicked')}>
            New cycle
          </HatButton>

          <HatButton color="secondary" onClick={() => console.log('clicked')}>
            New cycle
          </HatButton>

          <HatButton color="accent" onClick={() => console.log('clicked')}>
            New cycle
          </HatButton>

          <HatButton color="destructive" onClick={() => console.log('clicked')}>
            New cycle
          </HatButton>

          <HatButton
            color="constructive"
            onClick={() => console.log('clicked')}
          >
            New cycle
          </HatButton>

          <HatBreak paddingVertical="lg" />

          <HatButton size="lg" onClick={() => console.log('clicked')}>
            New cycle
          </HatButton>
        </HatFlex.Col>
      </HatWidthClamp>

      <HatPadding size="md">
        <Logo />
      </HatPadding>

      <HatFlex.Col gap="md">
        <HatText size="xxl">Text Hello World</HatText>

        <HatText.h1 size="xxl">Text Hello World</HatText.h1>

        <HatText.p size="billboard">Text Hello World</HatText.p>

        <HatText.h1 size="xxl">Text Hello World</HatText.h1>
        <HatText.h2 size="xl">Text Hello World</HatText.h2>
        <HatText.h3 size="lg">Text Hello World</HatText.h3>
        <HatText.h4 size="md">Text Hello World</HatText.h4>

        <HatText.p>Text Hello World</HatText.p>
      </HatFlex.Col>
    </div>
  )
}
