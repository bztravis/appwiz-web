'use client'

import { FormSubmitButton } from '@/components/FormSubmitButton'
import FullPageLayout from '@/components/FullPageLayout'
import { HatFlex } from '@/Hat/HatFlex'
import { HatForm } from '@/Hat/HatForm'
import { HatText } from '@/Hat/HatText'
import { HatTextInput } from '@/Hat/HatTextInput'
import { useUser } from '@/hooks/useUser'
import { supabase } from '@/utils/supabase/client'
import { queryClient } from '@/utils/tanstackQuery'
import { toast } from '@/utils/toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const SetupFormSchema = z.object({
  name: z
    .string()
    .regex(/[a-zA-Z]/, { message: 'Include at least one letter' }),
})

type SetupFormFields = z.infer<typeof SetupFormSchema>

export default function Page() {
  const form = useForm<SetupFormFields>({
    resolver: zodResolver(SetupFormSchema),
  })

  const router = useRouter()
  const user = useUser()

  const { mutateAsync } = useMutation({
    mutationFn: async (data: SetupFormFields) => {
      const { error } = await supabase
        .from('profiles')
        .update({ name: data.name })
        .eq('id', user.id)

      if (error) {
        throw error
      }
    },
    onError: (error) => {
      toast.error(error.message)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile'] })
      router.push('/')
    },
  })

  return (
    <FullPageLayout>
      <HatForm<SetupFormFields>
        form={form}
        onSubmit={mutateAsync}
        disableAfterSuccess={true}
      >
        <HatFlex.Col gap="lg">
          <HatText.h1 size="xl">
            Let’s finish setting up your account
          </HatText.h1>

          <HatTextInput
            size="lg"
            name="name"
            label="What’s your name?"
            placeholder="First and last"
            required={true}
          />

          <FormSubmitButton size="lg" color="primary">
            Continue
          </FormSubmitButton>
        </HatFlex.Col>
      </HatForm>
    </FullPageLayout>
  )
}
