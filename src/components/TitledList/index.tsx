import { HatBreak } from '@/Hat/HatBreak'
import { HatButton } from '@/Hat/HatButton'
import { HatFlex } from '@/Hat/HatFlex'
import { HatText } from '@/Hat/HatText'
import { HatActionProps } from '@/Hat/utils'

// type Tab = {
//   title: string
// }

type TitledListProps = {
  title: string
  // tabs?: Tab[]
  actions?: {
    primary: HatActionProps
    others?: HatActionProps[]
  }
  children?: React.ReactNode
}

export function TitledList({
  title,
  /* tabs, */ actions,
  children,
}: TitledListProps) {
  const renderActions =
    actions &&
    (actions.primary || (actions.others && actions.others.length > 0))

  return (
    <HatFlex.Col gap="xl">
      <HatFlex.Col gap="md">
        <HatFlex.Row justify="between" align="center" gap="sm" wrap={true}>
          <HatText.h1 size="xxl">{title}</HatText.h1>

          {renderActions && <Actions actions={actions} />}
        </HatFlex.Row>

        <HatBreak paddingVertical="none" />
      </HatFlex.Col>

      {children}
    </HatFlex.Col>
  )
}

function Actions({ actions }: { actions: TitledListProps['actions'] }) {
  return (
    <HatFlex.Row gap="sm" wrap={true} fitContent={true}>
      {actions?.others &&
        actions.others.map((action) => (
          <HatButton
            {...{ ...action.buttonProps, color: 'secondary' }}
            key={action.label}
          >
            {action.label}
          </HatButton>
        ))}

      {actions?.primary && (
        <HatButton {...{ ...actions.primary.buttonProps, color: 'primary' }}>
          {actions.primary.label}
        </HatButton>
      )}
    </HatFlex.Row>
  )
}
