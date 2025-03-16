import {
  Root,
  Portal,
  Overlay,
  Title,
  Description,
  Content,
} from '@radix-ui/react-dialog'
import styles from './HatModal.module.scss'
import { HatText } from '../HatText'
import { HatActionProps, hatActionToButtonPropsResolver } from '../utils'
import { HatButton } from '../HatButton'
import styleBuilder from '@/utils/styleBuilder'

type HatModalProps = {
  size?: 'md' | 'lg'
  title: string
  open: boolean
  cancelAction?: HatActionProps
  actions: HatActionProps[]
  children: React.ReactNode
}

export function HatModal({
  size = 'md',
  title,
  open,
  cancelAction,
  actions,
  children,
}: HatModalProps) {
  return (
    <Root open={open} modal={true}>
      <Portal container={document.getElementById('modal-root')!}>
        <Overlay className={styles.overlay} />

        <Content className={styleBuilder([styles.content, styles[size]])}>
          <Title asChild className={styles.title}>
            {/* span needed to avoid default dialog font sizing */}
            <span>
              <HatText.h2 size="lg">{title}</HatText.h2>
            </span>
          </Title>

          <Description asChild className={styles.scroller}>
            {/* div needed to avoid error rendering p within p */}
            <div>{children}</div>
          </Description>

          <div
            className={styleBuilder([
              styles.footer,
              [styles.hasCancelAction, !!cancelAction],
            ])}
          >
            {cancelAction && (
              <HatButton
                color="_minimal"
                {...hatActionToButtonPropsResolver(cancelAction)}
              >
                Nevermind
              </HatButton>
            )}

            <div className={styles.actions}>
              {actions.map((action) => (
                <HatButton
                  key={action.label}
                  {...hatActionToButtonPropsResolver(action)}
                >
                  {action.label}
                </HatButton>
              ))}
            </div>
          </div>
        </Content>
      </Portal>
    </Root>
  )
}
