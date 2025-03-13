import { HatButton } from '@/Hat/HatButton'
import { HatFlex } from '@/Hat/HatFlex'
import { HatText } from '@/Hat/HatText'
import { HatActionProps, hatActionToButtonPropsResolver } from '@/Hat/utils'
import styles from './EmptyState.module.scss'

type EmptyStateProps = {
  icon: React.ReactNode
  message: string | React.ReactNode
  actions?: HatActionProps[]
}

export function EmptyState({ icon, message, actions }: EmptyStateProps) {
  return (
    <HatFlex.Col gap="xl" align="center">
      <HatFlex.Col gap="sm" align="center">
        <span className={styles.icon}>{icon}</span>

        {typeof message === 'string' ? (
          <HatText.p size="md" align="center">
            {message}
          </HatText.p>
        ) : (
          message
        )}
      </HatFlex.Col>

      <HatFlex.Row gap="sm" justify="center" wrap={true}>
        {actions &&
          actions.map((action) => (
            <HatButton
              {...hatActionToButtonPropsResolver(action)}
              key={action.label}
            >
              {action.label}
            </HatButton>
          ))}
      </HatFlex.Row>
    </HatFlex.Col>
  )
}
