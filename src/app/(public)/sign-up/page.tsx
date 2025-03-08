'use client'

import { HatBreak } from '@/Hat/HatBreak'
import { HatButton } from '@/Hat/HatButton'
import { HatFlex } from '@/Hat/HatFlex'
import { HatText } from '@/Hat/HatText'
import Google from '../../../assets/icons/Google.svg'
import { HatTextInput } from '@/Hat/HatTextInput'
import { getPageTitle } from '@/utils/getPageTitle'
import { HatLink } from '@/Hat/HatLink'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signUp } from '../actions'
import { objToFormData } from '@/utils/objToFormData'
import { HatForm } from '@/Hat/HatForm'
import { HatPadding } from '@/Hat/HatPadding'
import { FormSubmitButton } from '@/components/FormSubmitButton'

const SignUpFormSchema = z
  .object({
    email: z.string().email(),
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters' }),
    confirmPassword: z.string(),
  })
  .superRefine((val, ctx) => {
    if (val.password !== val.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['confirmPassword'],
        message: `Passwords do not match`,
      })
    }
  })

type SignUpFormFields = z.infer<typeof SignUpFormSchema>

export default function Page() {
  const form = useForm<SignUpFormFields>({
    resolver: zodResolver(SignUpFormSchema),
  })

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

          <HatForm<SignUpFormFields> form={form} onSubmit={onSubmit}>
            <HatFlex.Col align="stretch" gap="lg">
              <HatFlex.Col gap="md">
                <HatTextInput
                  size="lg"
                  name="email"
                  label="Email"
                  type="email"
                  required={true}
                />

                <HatTextInput
                  size="lg"
                  name="password"
                  label="Password"
                  type="password"
                  required={true}
                />

                <HatTextInput
                  size="lg"
                  name="confirmPassword"
                  label="Confirm password"
                  type="password"
                  required={true}
                />
              </HatFlex.Col>

              <FormSubmitButton size="lg" color="primary">
                Sign Up
              </FormSubmitButton>
            </HatFlex.Col>
          </HatForm>
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

  async function onSubmit(data: SignUpFormFields) {
    const res = await signUp(objToFormData(data))

    if (res && !res.success) {
      form.setError('root', {
        type: 'manual',
        message: res.message,
      })
    }
  }
}
