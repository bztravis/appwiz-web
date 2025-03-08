import { GENERIC_ERROR_MESSAGE } from '@/utils/errorMessages'
import { HatBaseProps } from '../utils'
import { FieldValues, FormProvider, UseFormReturn } from 'react-hook-form'

type HatFormProps<FormFields extends FieldValues> = {
  form: UseFormReturn<FormFields>
  onSubmit: (data: FormFields) => void
  children: React.ReactNode
} & HatBaseProps

export function HatForm<FormFields extends FieldValues>({
  form,
  onSubmit,
  children,
}: HatFormProps<FormFields>) {
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmitWrapper)}>{children}</form>
    </FormProvider>
  )

  async function onSubmitWrapper(data: FormFields) {
    try {
      await onSubmit(data)
    } catch (error) {
      if (error instanceof Error && error.message.includes('NEXT_REDIRECT')) {
        return
      }

      form.setError('root', {
        type: 'manual',
        message: GENERIC_ERROR_MESSAGE,
      })
    }
  }
}
