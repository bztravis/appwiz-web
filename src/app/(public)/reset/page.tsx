'use client'

import { HatFlex } from '@/Hat/HatFlex'
import { HatText } from '@/Hat/HatText'
import { HatTextInput } from '@/Hat/HatTextInput'
import { getPageTitle } from '@/utils/getPageTitle'
import { HatLink } from '@/Hat/HatLink'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { supabase } from '@/utils/supabase/client'
import { HatForm } from '@/Hat/HatForm'
import { FormSubmitButton } from '@/components/FormSubmitButton'
import { GENERIC_ERROR_MESSAGE } from '@/utils/errorMessages'

const ResetPasswordFormSchema = z.object({
  email: z.string().email(),
})

type ResetPasswordFormFields = z.infer<typeof ResetPasswordFormSchema>

export default function Page() {
  const form = useForm<ResetPasswordFormFields>({
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

        <HatForm<ResetPasswordFormFields> form={form} onSubmit={onSubmit}>
          <HatFlex.Col align="stretch" gap="md">
            <HatTextInput
              size="lg"
              placeholder="Email"
              name="email"
              type="email"
              required={true}
            />

            <FormSubmitButton
              size="lg"
              color="accent"
              disabled={form.formState.isSubmitSuccessful}
            >
              Send reset link
            </FormSubmitButton>
          </HatFlex.Col>
        </HatForm>

        <HatLink to="/login" color="primary">
          Back to login
        </HatLink>
      </HatFlex.Col>
    </>
  )

  async function onSubmit(data: ResetPasswordFormFields) {
    const { error } = await supabase.auth.resetPasswordForEmail(data.email, {
      redirectTo: process.env.NEXT_PUBLIC_APP_URL,
    })

    if (error) {
      form.setError('root', {
        message: GENERIC_ERROR_MESSAGE,
      })

      return
    }

    // todo: toast success
  }
}
