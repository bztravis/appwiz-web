import { HatButton, HatButtonProps } from '@/Hat/HatButton'
import { HatFlex } from '@/Hat/HatFlex'
import { HatPadding } from '@/Hat/HatPadding'
import { HatText } from '@/Hat/HatText'
import { useFormContext } from 'react-hook-form'

type FormSubmitButtonProps = Pick<
  HatButtonProps,
  'size' | 'color' | 'disabled'
> & {
  children: React.ReactNode
}

export function FormSubmitButton({
  size,
  color,
  disabled,
  children,
}: FormSubmitButtonProps) {
  const formContext = useFormContext()

  if (!formContext) {
    throw new Error('FormSubmitButton must be used within a HatForm')
  }

  const errorMessage = formContext.formState.errors.root?.message

  return (
    <HatFlex.Col gap="sm" align="stretch">
      <HatButton size={size} color={color} type="submit" disabled={disabled}>
        {children}
      </HatButton>

      {errorMessage && (
        <HatPadding sizeHorizontal="sm">
          <HatText color="destructive" size="xs" ariaRole="alert">
            {errorMessage}
          </HatText>
        </HatPadding>
      )}
    </HatFlex.Col>
  )
}
