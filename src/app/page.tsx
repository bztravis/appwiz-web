'use client'

import { HatButton } from '@/hat/HatButton'
import SpeedLine from './SpeedLine.svg'
import { HatText } from '@/hat/HatText'
import { HatFlex } from '@/hat/HatFlex'
import { Logo } from '@/components/Logo'
import { HatPadding } from '@/hat/HatPadding'

export default function Home() {
  console.log(SpeedLine)
  return (
    <div>
      <HatFlex.Col align="stretch" gap="xs">
        <HatButton onClick={() => console.log('clicked')}>New cycle</HatButton>
        <HatButton onClick={() => console.log('clicked')}>New cycle</HatButton>
        <HatButton onClick={() => console.log('clicked')}>New cycle</HatButton>
      </HatFlex.Col>

      <HatPadding>
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
