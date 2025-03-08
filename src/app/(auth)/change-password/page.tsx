'use client'

import AuthLayout from '@/app/(public)/layout'
import { FormSubmitButton } from '@/components/FormSubmitButton'
import { HatFlex } from '@/Hat/HatFlex'
import { HatForm } from '@/Hat/HatForm'
import { HatLink } from '@/Hat/HatLink'
import { HatText } from '@/Hat/HatText'
import { HatTextInput } from '@/Hat/HatTextInput'
import { useUser } from '@/hooks/useUser'
import { getPageTitle } from '@/utils/getPageTitle'
import { supabase } from '@/utils/supabase/client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const ChangePasswordFormSchema = z.object({
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters' }),
})

type ChangePasswordFormFields = z.infer<typeof ChangePasswordFormSchema>

export default function Page() {
  const form = useForm<ChangePasswordFormFields>({
    resolver: zodResolver(ChangePasswordFormSchema),
  })

  const user = useUser()

  return (
    <AuthLayout>
      <title>{getPageTitle('Change password')}</title>

      <HatFlex.Col gap="xl">
        <HatFlex.Col gap="md">
          <HatText.h1 size="xl">Change your password</HatText.h1>

          <HatText.p color="hushed">
            Enter a new password for your account
            {user.email ? ` (${user.email})` : ''}.
          </HatText.p>
        </HatFlex.Col>

        <HatForm<ChangePasswordFormFields> form={form} onSubmit={onSubmit}>
          <HatFlex.Col align="stretch" gap="md">
            <HatTextInput
              size="lg"
              placeholder="Password"
              name="password"
              type="password"
              required={true}
              disabled={form.formState.isSubmitSuccessful}
            />

            <FormSubmitButton
              size="lg"
              color="accent"
              disabled={form.formState.isSubmitSuccessful}
            >
              Change password
            </FormSubmitButton>

            {form.formState.isSubmitSuccessful && (
              <HatText color="constructive">Password changed</HatText>
            )}
          </HatFlex.Col>
        </HatForm>

        <HatLink to="/" color="primary">
          Back to dashboard
        </HatLink>
      </HatFlex.Col>
    </AuthLayout>
  )

  async function onSubmit(data: ChangePasswordFormFields) {
    const { error } = await supabase.auth.updateUser({
      password: data.password,
    })

    if (error) {
      form.setError('root', {
        message: error.message,
      })
    }
  }
}
