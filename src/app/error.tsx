'use client'

import FullPageLayout from '@/components/FullPageLayout'
import SkullLine from '../assets/icons/SkullLine.svg'
import { useRouter } from 'next/navigation'
import { EmptyState } from '@/components/EmptyState'

export default function Error() {
  const router = useRouter()

  return (
    <FullPageLayout>
      <EmptyState
        icon={<SkullLine />}
        message="Oops, an error occurred. Try again later."
        actions={[{ label: 'Go back', onClick: () => router.back() }]}
      />
    </FullPageLayout>
  )
}
