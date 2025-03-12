'use client'

import FullPageLayout from '@/components/FullPageLayout'
import QuestionLine from '../assets/icons/QuestionLine.svg'
import { useRouter } from 'next/navigation'
import { EmptyState } from '@/components/EmptyState'

export default function Error() {
  const router = useRouter()

  return (
    <FullPageLayout>
      <EmptyState
        icon={<QuestionLine />}
        message="Hmm... we couldn’t find the page you’re looking for."
        actions={[{ label: 'Go back', onClick: () => router.back() }]}
      />
    </FullPageLayout>
  )
}
