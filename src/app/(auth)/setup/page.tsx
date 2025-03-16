'use client'

import { FormSubmitButton } from '@/components/FormSubmitButton'
import FullPageLayout from '@/components/FullPageLayout'
import { HatFlex } from '@/Hat/HatFlex'
import { HatForm } from '@/Hat/HatForm'
import { HatText } from '@/Hat/HatText'
import { HatTextInput } from '@/Hat/HatTextInput'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const SetupFormSchema = z.object({
  name: z.string(),
})

type SetupFormFields = z.infer<typeof SetupFormSchema>

export default function Page() {
  const form = useForm<SetupFormFields>({
    resolver: zodResolver(SetupFormSchema),
  })

  return (
    <FullPageLayout>
      <HatFlex.Col gap="xl">
        <HatText.h1 size="xl">Let’s finish setting up your account</HatText.h1>

        <HatForm<SetupFormFields>
          form={form}
          onSubmit={onSubmit}
          disableAfterSuccess={true}
        >
          <HatFlex.Col align="stretch" gap="lg">
            <HatFlex.Col gap="md">
              <HatTextInput
                size="lg"
                name="name"
                label="What’s your name?"
                placeholder="First and last"
                required={true}
              />
            </HatFlex.Col>

            <FormSubmitButton size="lg" color="primary">
              Continue
            </FormSubmitButton>
          </HatFlex.Col>
        </HatForm>
      </HatFlex.Col>
    </FullPageLayout>
  )

  function onSubmit(data: SetupFormFields) {
    console.log(data)
  }
}
