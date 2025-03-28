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
import { getAppUrl } from '@/utils/getAppUrl'

export default function Page() {
  return (
    <>
      <title>{getPageTitle('Reset password')}</title>

      <PageImpl />
    </>
  )
}

const ResetPasswordFormSchema = z.object({
  email: z.string().email(),
})

type ResetPasswordFormFields = z.infer<typeof ResetPasswordFormSchema>

function PageImpl() {
  const form = useForm<ResetPasswordFormFields>({
    resolver: zodResolver(ResetPasswordFormSchema),
  })

  return (
    <HatFlex.Col gap="xl">
      <HatFlex.Col gap="md">
        <HatText.h1 size="xl">Reset your password</HatText.h1>

        <HatText.p size="sm" color="hushed">
          Enter the email address associated with your account and we’ll send
          you a link to reset your password.
        </HatText.p>
      </HatFlex.Col>

      <HatForm<ResetPasswordFormFields>
        form={form}
        onSubmit={onSubmit}
        disableAfterSuccess={true}
      >
        <HatFlex.Col align="stretch" gap="md">
          <HatTextInput
            size="lg"
            placeholder="Email"
            name="email"
            type="email"
            required={true}
          />

          <FormSubmitButton size="lg" color="primary">
            Send reset link
          </FormSubmitButton>

          {form.formState.isSubmitSuccessful && (
            <HatText size="sm" color="constructive" ariaRole="alert">
              An email with a reset link was sent to{' '}
              <b>{form.getValues().email}</b>. Follow the instructions there.
            </HatText>
          )}
        </HatFlex.Col>
      </HatForm>

      <HatLink to="/login" size="sm" color="primary">
        Back to login
      </HatLink>
    </HatFlex.Col>
  )

  async function onSubmit(data: ResetPasswordFormFields) {
    const { error } = await supabase.auth.resetPasswordForEmail(data.email, {
      redirectTo: getAppUrl('/auth/callback/?next=/change-password'),
    })

    if (error) {
      form.setError('root', {
        message: error.message,
      })
    }
  }
}
