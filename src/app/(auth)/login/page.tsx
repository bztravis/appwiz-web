'use client'

import { HatBreak } from '@/Hat/HatBreak'
import { HatButton } from '@/Hat/HatButton'
import { HatFlex } from '@/Hat/HatFlex'
import { HatText } from '@/Hat/HatText'
import Google from '../../../assets/icons/Google.svg'
import { HatTextInput } from '@/Hat/HatTextInput'
import { getPageTitle } from '@/utils/getPageTitle'
import { HatLink } from '@/Hat/HatLink'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const LoginFormSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters' }),
})

export type LoginFormFields = z.infer<typeof LoginFormSchema>

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormFields>({
    resolver: zodResolver(LoginFormSchema),
  })

  console.log(errors.email)

  return (
    <>
      <title>{getPageTitle('Login')}</title>

      <HatFlex.Col gap="xl">
        <HatText.h1 size="xl">Welcome back!</HatText.h1>

        <HatFlex.Col align="stretch" gap="lg">
          <HatButton size="lg" color="secondary">
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

          <form onSubmit={handleSubmit(onSubmit)}>
            <HatFlex.Col align="stretch" gap="lg">
              <HatFlex.Col gap="md">
                <HatTextInput
                  size="lg"
                  placeholder="Email"
                  type="email"
                  required={true}
                  registerProps={register('email')}
                  error={errors['email']}
                />

                <HatTextInput
                  size="lg"
                  placeholder="Password"
                  type="password"
                  required={true}
                  registerProps={register('password')}
                  error={errors['password']}
                />
              </HatFlex.Col>

              <HatButton size="lg" type="submit">
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

  function onSubmit(data: LoginFormFields) {
    console.log(data)
  }
}
