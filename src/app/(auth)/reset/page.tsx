'use client'

import { HatButton } from '@/Hat/HatButton'
import { HatFlex } from '@/Hat/HatFlex'
import { HatText } from '@/Hat/HatText'
import Link from 'next/link'
import { HatTextInput } from '@/Hat/HatTextInput'
import { getPageTitle } from '@/utils/getPageTitle'

export default function Page() {
  return (
    <>
      <title>{getPageTitle('Reset password')}</title>

      <HatFlex.Col gap="xl">
        <HatFlex.Col gap="sm">
          <HatText.h1 size="xl">Reset your password</HatText.h1>

          <HatText.p color="hushed">
            Enter the email address associated with your account and we’ll send
            you a link to reset your password.
          </HatText.p>
        </HatFlex.Col>

        <HatFlex.Col align="stretch" gap="md">
          <HatTextInput size="lg" placeholder="Email" type="email" />

          <HatButton size="lg" onClick={() => console.log('clicked')}>
            Continue
          </HatButton>
        </HatFlex.Col>

        <HatText.p>
          <Link href="/login">Back to login</Link>
        </HatText.p>
      </HatFlex.Col>
    </>
  )
}
