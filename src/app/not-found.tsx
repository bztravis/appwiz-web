'use client'

import FullPageLayout from '@/components/FullPageLayout'
import { HatFlex } from '@/Hat/HatFlex'
import QuestionLine from '../assets/icons/QuestionLine.svg'
import { HatText } from '@/Hat/HatText'
import styles from './not-found.module.scss'
import { HatButton } from '@/Hat/HatButton'
import { useRouter } from 'next/navigation'

export default function Error() {
  const router = useRouter()

  return (
    <FullPageLayout>
      <HatFlex.Col gap="md" align="center">
        <span className={styles.icon}>
          <QuestionLine />
        </span>

        <HatText.p size="md" align="center">
          Hmm... we couldn’t find the page you’re looking for.
        </HatText.p>

        <HatButton onClick={() => router.back()}>Go back</HatButton>
      </HatFlex.Col>
    </FullPageLayout>
  )
}
