'use client'

import FullPageLayout from '@/components/FullPageLayout'
import { HatFlex } from '@/Hat/HatFlex'
import SkullLine from '../assets/icons/SkullLine.svg'
import styles from './error.module.scss'
import { HatText } from '@/Hat/HatText'

export default function Error() {
  return (
    <FullPageLayout>
      <HatFlex.Col gap="md" align="center">
        <span className={styles.icon}>
          <SkullLine />
        </span>

        <HatText.p size="md" align="center">
          Oops, an error occurred. Try again later.
        </HatText.p>
      </HatFlex.Col>
    </FullPageLayout>
  )
}
