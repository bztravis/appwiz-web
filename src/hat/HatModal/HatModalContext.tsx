'use client'

import { use, useMemo, useRef } from 'react'
import { createContext } from 'react'

type ModalQueueContextType = {
  registerModal: (id: string) => boolean // Returns whether modal should open
  unregisterModal: (id: string) => void
}

const ModalQueueContext = createContext<ModalQueueContextType | null>(null)

export const ModalQueueProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const queue = useRef<string[]>([])

  function registerModal(id: string) {
    if (!queue.current.includes(id))
      queue.current = queue.current.includes(id)
        ? queue.current
        : [...queue.current, id]
    return queue.current[0] === id // Only allow first modal to open
  }

  function unregisterModal(id: string) {
    queue.current = queue.current.filter((modalId) => modalId !== id)
  }

  const memoKey = queue.current.join()

  const value = useMemo(
    () => ({
      registerModal,
      unregisterModal,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [memoKey]
  )

  return <ModalQueueContext value={value}>{children}</ModalQueueContext>
}

export const useModalQueue = () => {
  const context = use(ModalQueueContext)

  if (!context)
    throw new Error('useModalQueue must be used within a ModalQueueProvider')

  return context
}
