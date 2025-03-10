'use client'

import FullPageLayout from '@/components/FullPageLayout'
import { HatFlex } from '@/Hat/HatFlex'
import SkullLine from '../assets/icons/SkullLine.svg'
import styles from './error.module.scss'
import { HatText } from '@/Hat/HatText'
import { HatButton } from '@/Hat/HatButton'
import { useRouter } from 'next/navigation'

export default function Error() {
  const router = useRouter()

  return (
    <FullPageLayout>
      <HatFlex.Col gap="md" align="center">
        <span className={styles.icon}>
          <SkullLine />
        </span>

        <HatText.p size="md" align="center">
          Oops, an error occurred. Try again later.
        </HatText.p>

        <HatButton onClick={() => router.back()}>Go back</HatButton>
      </HatFlex.Col>
    </FullPageLayout>
  )
}
