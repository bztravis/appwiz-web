'use client'

import { HatBreak } from '@/Hat/HatBreak'
import { HatButton } from '@/Hat/HatButton'
import { HatFlex } from '@/Hat/HatFlex'
import { HatText } from '@/Hat/HatText'
import Google from '../../../assets/icons/Google.svg'
import { HatTextInput } from '@/Hat/HatTextInput'
import { getPageTitle } from '@/utils/getPageTitle'
import { HatLink } from '@/Hat/HatLink'

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

          <form>
            <HatFlex.Col align="stretch" gap="lg">
              <HatFlex.Col gap="md">
                <HatTextInput size="lg" label="Email" type="email" />

                <HatTextInput size="lg" label="Password" type="password" />

                <HatTextInput
                  size="lg"
                  label="Confirm password"
                  type="password"
                />
              </HatFlex.Col>

              <HatButton
                size="lg"
                type="submit"
                onClick={() => console.log('clicked')}
              >
                Sign Up
              </HatButton>
            </HatFlex.Col>
          </form>
        </HatFlex.Col>

        <HatText.p color="hushed">
          Already have an account?{' '}
          <HatLink to="/login" color="primary">
            Login
          </HatLink>
        </HatText.p>
      </HatFlex.Col>
    </>
  )
}
