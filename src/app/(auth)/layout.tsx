'use client'

import React, { useState } from 'react'
import { AuthProvider } from '@/utils/AuthProvider'
import { Toaster } from 'sonner'
import { HatModal } from '@/Hat/HatModal'
// import { HatModalProvider } from '@/Hat/HatModal/HatModalContext'
import { HatForm } from '@/Hat/HatForm'
import { useForm } from 'react-hook-form'
import { ModalQueueProvider } from '@/Hat/HatModal/HatModalContext'

export default function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(true)
  const [open2, setOpen2] = useState(true)
  console.log('layout rendering')
  // const form = useForm()
  return (
    <AuthProvider>
      {/* <HatModalProvider> */}
      <ModalQueueProvider>
        <Toaster expand={true} />

        <HatModal
          title="Welcome to AppWiz!"
          open={open}
          actions={[
            {
              label: 'Ok',
              onClick: () => {
                setOpen(false)
              },
            },
          ]}
        >
          <p>Let’s finish setting up your account:</p>

          {/* <HatForm> */}

          {/* </HatForm> */}
        </HatModal>

        <HatModal
          title="Welcome to AppWiz 2!"
          open={open2}
          actions={[
            {
              label: 'Ok',
              onClick: () => {
                setOpen2(false)
              },
            },
          ]}
        >
          <p>Let’s finish setting up your account:</p>

          {/* <HatForm> */}

          {/* </HatForm> */}
        </HatModal>

        {children}
      </ModalQueueProvider>
      {/* </HatModalProvider> */}
    </AuthProvider>
  )
}
