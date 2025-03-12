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
import { login } from '../actions'
import { objToFormData } from '@/utils/objToFormData'
import { HatForm } from '@/Hat/HatForm'
import { FormSubmitButton } from '@/components/FormSubmitButton'
import { signInWithGoogle } from '@/utils/auth'
import { useRouter, useSearchParams } from 'next/navigation'

export default function Page() {
  return (
    <>
      <title>{getPageTitle('Login')}</title>

      <PageImpl />
    </>
  )
}

const LoginFormSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

type LoginFormFields = z.infer<typeof LoginFormSchema>

function PageImpl() {
  const form = useForm<LoginFormFields>({
    resolver: zodResolver(LoginFormSchema),
  })

  const searchParams = useSearchParams()
  const router = useRouter()

  return (
    <HatFlex.Col gap="xl">
      <HatText.h1 size="xl">Welcome back!</HatText.h1>

      <HatFlex.Col align="stretch" gap="lg">
        <HatButton size="lg" color="secondary" onClick={signInWithGoogle}>
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

        <HatForm<LoginFormFields> form={form} onSubmit={onSubmit}>
          <HatFlex.Col align="stretch" gap="lg">
            <HatFlex.Col gap="md">
              <HatTextInput
                size="lg"
                name="email"
                placeholder="Email"
                type="email"
                required={true}
              />

              <HatTextInput
                size="lg"
                name="password"
                placeholder="Password"
                type="password"
                required={true}
              />
            </HatFlex.Col>

            <FormSubmitButton size="lg" color="primary">
              Login
            </FormSubmitButton>
          </HatFlex.Col>
        </HatForm>
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
  )

  async function onSubmit(data: LoginFormFields) {
    const res = await login(objToFormData(data))

    if (!res) return

    if (!res.success) {
      form.setError('root', {
        type: 'manual',
        message: res.message,
      })
    }

    if (searchParams.has('redirect')) {
      router.push(searchParams.get('redirect') as string) // push so that the Go back button works
    } else {
      router.push(process.env.NEXT_PUBLIC_AUTHED_REDIRECT_URL!)
    }
  }
}
