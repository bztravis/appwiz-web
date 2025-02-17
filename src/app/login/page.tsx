'use client'

import { Logo } from '@/components/Logo'
import { HatBreak } from '@/Hat/HatBreak'
import { HatButton } from '@/Hat/HatButton'
import { HatFlex } from '@/Hat/HatFlex'
import { HatPadding } from '@/Hat/HatPadding'
import { HatText } from '@/Hat/HatText'
import { HatWidthClamp } from '@/Hat/HatWidthClamp'
import { pxToRem } from '@/utils/pxToRem'
import Google from '../../assets/icons/Google.svg'
import Link from 'next/link'

export default function Page() {
  return (
    <HatPadding size="xl">
      <HatFlex.Col gap="xxxl">
        <Logo size="md" />

        {/* <HatWidthClamp sizeRem={pxToRem(280)}> */}

        <HatFlex.Col justify="center" align="stretch" gap="lg">
          <HatText.h1 size="xl">Welcome back!</HatText.h1>

          <HatButton
            size="lg"
            color="secondary"
            onClick={() => console.log('clicked')}
          >
            <Google />
            Continue with Google
          </HatButton>

          <HatBreak paddingVertical="none" />

          <HatFlex.Col gap="md">
            <HatText.h2 size="md">Email</HatText.h2>
            <input
              placeholder="Email"
              type="text"
              style={{
                width: '100%',
                borderColor: 'lightgray',
                borderStyle: 'solid',
                borderWidth: '1px',
                borderRadius: '4px',
                padding: '6px',
              }}
            />

            <HatText.h2 size="md">Password</HatText.h2>
            <input
              placeholder="Password"
              type="text"
              style={{
                width: '100%',
                borderColor: 'lightgray',
                borderStyle: 'solid',
                borderWidth: '1px',
                borderRadius: '4px',
                padding: '6px',
              }}
            />
          </HatFlex.Col>

          <HatButton size="lg" onClick={() => console.log('clicked')}>
            Login
          </HatButton>

          <HatFlex.Col gap="xs">
            <HatText.p>
              Forgot your password? <Link href="/login">Reset password</Link>
            </HatText.p>

            <HatText.p>
              Don’t have an account? <Link href="/login">Sign up</Link>
            </HatText.p>
          </HatFlex.Col>
        </HatFlex.Col>

        {/* </HatWidthClamp> */}
      </HatFlex.Col>
    </HatPadding>
  )
}
