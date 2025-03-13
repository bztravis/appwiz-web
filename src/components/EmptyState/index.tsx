import { HatButton } from '@/Hat/HatButton'
import { HatFlex } from '@/Hat/HatFlex'
import { HatText } from '@/Hat/HatText'
import { HatActionProps, hatActionToButtonPropsResolver } from '@/Hat/utils'
import styles from './EmptyState.module.scss'

type EmptyStateProps = {
  icon: React.ReactNode
  message: string
  actions?: HatActionProps[]
}

export function EmptyState({ icon, message, actions }: EmptyStateProps) {
  return (
    <HatFlex.Col gap="md" align="center">
      <span className={styles.icon}>{icon}</span>

      <HatText.p size="md" align="center">
        {message}
      </HatText.p>

      {actions &&
        actions.map((action) => (
          <HatButton
            {...hatActionToButtonPropsResolver(action)}
            key={action.label}
          >
            {action.label}
          </HatButton>
        ))}
    </HatFlex.Col>
  )
}
