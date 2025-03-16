'use client'

import { HatBreak } from '@/Hat/HatBreak'
import { HatButton } from '@/Hat/HatButton'
import { HatFlex } from '@/Hat/HatFlex'
import { HatText } from '@/Hat/HatText'
import { HatActionProps, hatActionToButtonPropsResolver } from '@/Hat/utils'

// type Tab = {
//   title: string
// }

export type TitledPageProps = {
  title: string
  // tabs?: Tab[]
  actions?: {
    primary: HatActionProps
    others?: HatActionProps[]
  }
  children?: React.ReactNode
}

export function TitledPage({
  title,
  /* tabs, */ actions,
  children,
}: TitledPageProps) {
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

function Actions({ actions }: { actions: TitledPageProps['actions'] }) {
  return (
    <HatFlex.Row gap="sm" wrap={true} fitContent={true}>
      {actions?.others &&
        actions.others.map((action) => (
          <HatButton
            {...hatActionToButtonPropsResolver(action)}
            {...{ color: 'secondary' }}
            key={action.label}
          >
            {action.label}
          </HatButton>
        ))}

      {actions?.primary && (
        <HatButton
          {...hatActionToButtonPropsResolver(actions.primary)}
          {...{ color: 'primary' }}
        >
          {actions.primary.label}
        </HatButton>
      )}
    </HatFlex.Row>
  )
}
