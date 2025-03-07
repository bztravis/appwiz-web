'use client'

import { HatButton } from '@/Hat/HatButton'
import { HatFlex } from '@/Hat/HatFlex'
import { HatText } from '@/Hat/HatText'
import { HatTextInput } from '@/Hat/HatTextInput'
import { getPageTitle } from '@/utils/getPageTitle'
import { HatLink } from '@/Hat/HatLink'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const ResetPasswordFormSchema = z.object({
  email: z.string().email(),
})

type ResetPasswordFormFields = z.infer<typeof ResetPasswordFormSchema>

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormFields>({
    resolver: zodResolver(ResetPasswordFormSchema),
  })

  return (
    <>
      <title>{getPageTitle('Reset password')}</title>

      <HatFlex.Col gap="xl">
        <HatFlex.Col gap="md">
          <HatText.h1 size="xl">Reset your password</HatText.h1>

          <HatText.p color="hushed">
            Enter the email address associated with your account and we’ll send
            you a link to reset your password.
          </HatText.p>
        </HatFlex.Col>

        <form onSubmit={handleSubmit(onSubmit)}>
          <HatFlex.Col align="stretch" gap="md">
            <HatTextInput
              size="lg"
              placeholder="Email"
              type="email"
              required={true}
              error={errors['email']}
              registerProps={register('email')}
            />

            <HatButton size="lg" type="submit" color="accent">
              Send reset link
            </HatButton>
          </HatFlex.Col>
        </form>

        <HatLink to="/login" color="primary">
          Back to login
        </HatLink>
      </HatFlex.Col>
    </>
  )

  function onSubmit(data: ResetPasswordFormFields) {
    console.log(data)
  }
}
