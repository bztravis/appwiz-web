import { GENERIC_ERROR_MESSAGE } from '@/utils/errorMessages'
import { HatBaseProps } from '../utils'
import { FieldValues, FormProvider, UseFormReturn } from 'react-hook-form'
import { createContext } from 'react'

type HatFormProps<FormFields extends FieldValues> = {
  form: UseFormReturn<FormFields>
  onSubmit: (data: FormFields) => void
  disableAfterSuccess?: boolean
  children: React.ReactNode
} & Partial<HatFormContextProps> &
  HatBaseProps

type HatFormContextProps = {
  disableAfterSuccess: boolean
}

const DEFAULT_DISABLE_AFTER_SUCCESS = false

export const HatFormContext = createContext<HatFormContextProps>({
  disableAfterSuccess: DEFAULT_DISABLE_AFTER_SUCCESS,
})

export function HatForm<FormFields extends FieldValues>({
  form,
  onSubmit,
  disableAfterSuccess = DEFAULT_DISABLE_AFTER_SUCCESS,
  children,
}: HatFormProps<FormFields>) {
  return (
    <FormProvider {...form}>
      <HatFormContext value={{ disableAfterSuccess }}>
        <form onSubmit={form.handleSubmit(onSubmitWrapper)}>{children}</form>
      </HatFormContext>
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
