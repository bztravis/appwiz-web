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
    } catch {
      form.setError('root', {
        type: 'manual',
        message: 'Something went wrong',
      })
    }
  }
}
