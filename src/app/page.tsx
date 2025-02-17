'use client'

import HatButton from '@/hat/HatButton'
import SpeedLine from './SpeedLine.svg'

export default function Home() {
  console.log(SpeedLine)
  return <HatButton onClick={() => console.log('clicked')}>New cycle</HatButton>
}
