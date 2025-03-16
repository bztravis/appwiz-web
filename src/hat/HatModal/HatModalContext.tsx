'use client'

import { use, useMemo, useRef, useState } from 'react'
import { createContext } from 'react'

// export type HatModalContextState = {
//   isModalOpen: boolean
//   setIsModalOpen: (value: boolean) => void
// }

// export const HatModalContext = createContext<HatModalContextState>({
//   isModalOpen: false,
//   setIsModalOpen: undefined!,
// })

// export function HatModalProvider({ children }: { children: React.ReactNode }) {
//   const isModalOpen = useRef(false)

//   // const modalState = useMemo(
//   //   () => ({
//   //     isModalOpen: isModalOpen.current,
//   //     setIsModalOpen,
//   //   }),
//   //   [isModalOpen.current]
//   // )

//   const modalState = {
//     isModalOpen: isModalOpen.current,
//     setIsModalOpen,
//   }

//   return <HatModalContext value={modalState}>{children}</HatModalContext>

//   function setIsModalOpen(value: boolean) {
//     if (value === isModalOpen.current) return

//     console.log('before', isModalOpen.current)
//     console.log('being set to', value)
//     isModalOpen.current = value
//     console.log('after', isModalOpen.current)
//   }
// }

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
  // const [queue, setQueue] = useState<string[]>([])
  const queue = useRef<string[]>([])
  console.log({ queue })

  function registerModal(id: string) {
    if (!queue.current.includes(id))
      // setQueue((prevQueue) =>
      //   prevQueue.includes(id) ? prevQueue : [...prevQueue, id]
      // )
      queue.current = queue.current.includes(id)
        ? queue.current
        : [...queue.current, id]
    return queue.current[0] === id // Only allow first modal to open
  }

  function unregisterModal(id: string) {
    // setQueue((prevQueue) => prevQueue.filter((modalId) => modalId !== id))
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

  return (
    <ModalQueueContext
      // value={{ registerModal, unregisterModal }}
      value={value}
      // key={queue.current.length}
    >
      {children}
    </ModalQueueContext>
  )
}

export const useModalQueue = () => {
  const context = use(ModalQueueContext)
  if (!context)
    throw new Error('useModalQueue must be used within a ModalQueueProvider')
  return context
}
