'use client'

import { EmptyState } from '@/components/EmptyState'
import { useRouter } from 'next/navigation'
import SkullLine from '../../../assets/icons/SkullLine.svg'
import { HatFullHeight } from '@/Hat/HatFullHeight'

export default function NotFound() {
  const router = useRouter()

  return (
    <HatFullHeight>
      <EmptyState
        icon={<SkullLine />}
        message="Oops, an error occurred. Try again later."
        actions={[{ label: 'Go back', onClick: () => router.back() }]}
      />
    </HatFullHeight>
  )
}
