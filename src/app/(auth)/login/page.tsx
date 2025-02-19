'use client'

import { HatBreak } from '@/Hat/HatBreak'
import { HatButton } from '@/Hat/HatButton'
import { HatFlex } from '@/Hat/HatFlex'
import { HatText } from '@/Hat/HatText'
import Google from '../../../assets/icons/Google.svg'
import Link from 'next/link'
import { HatTextInput } from '@/Hat/HatTextInput'
import { getPageTitle } from '@/utils/getPageTitle'

export default function Page() {
  return (
    <>
      <title>{getPageTitle('Login')}</title>

      <HatFlex.Col gap="xl">
        <HatText.h1 size="xl">Welcome back!</HatText.h1>

        <HatFlex.Col align="stretch" gap="lg">
          <HatButton
            size="lg"
            color="secondary"
            onClick={() => console.log('clicked')}
          >
            <Google />
            Continue with Google
          </HatButton>

          <HatFlex.Row align="center" gap="sm">
            <HatBreak paddingVertical="none" />

            <HatText.p size="xs" color="faint">
              OR
            </HatText.p>

            <HatBreak paddingVertical="none" />
          </HatFlex.Row>

          <HatFlex.Col gap="md">
            <HatTextInput
              size="lg"
              label="Email"
              placeholder="Email"
              type="email"
            />

            <HatTextInput
              size="lg"
              label="Password"
              placeholder="Password"
              type="password"
            />
          </HatFlex.Col>

          <HatButton size="lg" onClick={() => console.log('clicked')}>
            Login
          </HatButton>

          <HatFlex.Col gap="xs">
            <HatText.p>
              Forgot your password? <Link href="/reset">Reset password</Link>
            </HatText.p>

            <HatText.p>
              Don’t have an account? <Link href="/sign-up">Sign up</Link>
            </HatText.p>
          </HatFlex.Col>
        </HatFlex.Col>
      </HatFlex.Col>
    </>
  )
}
