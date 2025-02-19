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
      <title>{getPageTitle('Sign Up')}</title>

      <HatFlex.Col gap="xl">
        <HatText.h1 size="xl">Sign up for AppWiz</HatText.h1>

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

            <HatTextInput
              size="lg"
              label="Confirm password"
              placeholder="Confirm password"
              type="password"
            />
          </HatFlex.Col>

          <HatButton size="lg" onClick={() => console.log('clicked')}>
            Sign Up
          </HatButton>

          <HatText.p>
            Already have an account? <Link href="/login">Login</Link>
          </HatText.p>
        </HatFlex.Col>
      </HatFlex.Col>
    </>
  )
}
