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
import { HatTextInput } from '@/Hat/HatTextInput'
import { getPageTitle } from '@/utils/getPageTitle'
import styles from './login.module.scss'

export default function Page() {
  return (
    <>
      <title>{getPageTitle('Login')}</title>

      <div className={styles.LoginRoot}>
        <Logo size="md" />

        <div className={styles.FormContainer}>
          <HatWidthClamp sizeRem={pxToRem(280)}>
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
                <HatTextInput label="Email" placeholder="Email" type="email" />

                <HatTextInput
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
                  Forgot your password?{' '}
                  <Link href="/login">Reset password</Link>
                </HatText.p>

                <HatText.p>
                  Don’t have an account? <Link href="/login">Sign up</Link>
                </HatText.p>
              </HatFlex.Col>
            </HatFlex.Col>
          </HatWidthClamp>
        </div>

        <HatBreak hr={false} />
      </div>
    </>
  )
}
