'use client'

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
import { use, useContext, useEffect, useState } from 'react'
import { /* HatModalContext,  */ useModalQueue } from './HatModalContext'

type HatModalProps = {
  size?: 'md' | 'lg'
  title: string | React.ReactNode
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
  // const { isModalOpen, setIsModalOpen } = useContext(HatModalContext)

  // let renderModal = false

  // if (!isModalOpen) {
  //   console.log({ isModalOpen })
  //   console.log({ title })
  //   renderModal = open
  //   setIsModalOpen(true)
  // }

  const { registerModal, unregisterModal } = useModalQueue()

  let shouldOpen = false
  if (open) {
    shouldOpen = registerModal(title as string)
  } else {
    unregisterModal(title as string)
  }

  // const [canOpen, setCanOpen] = useState(false)

  // useEffect(() => {
  //   if (open) {
  //     const shouldOpen = registerModal(title as string)
  //     setCanOpen(shouldOpen)
  //   } else {
  //     unregisterModal(title as string)
  //     setCanOpen(false)
  //   }
  // }, [open])

  if (actions.length === 0) {
    throw new Error('No actions were passed to HatModal')
  }

  return (
    // <Root open={renderModal} modal={true}>
    <Root open={shouldOpen} modal={true}>
      <Portal container={document.getElementById('modal-root')!}>
        <Overlay className={styles.overlay} />

        <Content
          className={styleBuilder([styles.content, styles[size]])}
          onOpenAutoFocus={(event) => event.preventDefault()} // prevent autofocus
        >
          <Title asChild className={styles.title}>
            {/* span needed to avoid default dialog font sizing */}
            <span>
              {typeof title === 'string' ? (
                <HatText.h2 size="lg">{title}</HatText.h2>
              ) : (
                title
              )}
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
