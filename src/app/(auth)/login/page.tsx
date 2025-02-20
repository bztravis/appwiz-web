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

          <form>
            <HatFlex.Col align="stretch" gap="lg">
              <HatFlex.Col gap="md">
                <HatTextInput size="lg" placeholder="Email" type="email" />

                <HatTextInput
                  size="lg"
                  placeholder="Password"
                  type="password"
                />
              </HatFlex.Col>

              <HatButton
                size="lg"
                type="submit"
                onClick={() => console.log('clicked')}
              >
                Login
              </HatButton>
            </HatFlex.Col>
          </form>
        </HatFlex.Col>

        <HatFlex.Col gap="xs">
          <HatText.p color="hushed">
            Forgot your password?{' '}
            <HatLink to="/reset" color="primary">
              Reset password
            </HatLink>
          </HatText.p>

          <HatText.p color="hushed">
            Don’t have an account?{' '}
            <HatLink to="/sign-up" color="primary">
              Sign up
            </HatLink>
          </HatText.p>
        </HatFlex.Col>
      </HatFlex.Col>
    </>
  )
}
