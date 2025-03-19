import { Suspense } from 'react'
import { TitledPage, TitledPageProps } from '../TitledPage'
import styles from './TitledListPage.module.scss'
import { HatFlex } from '@/Hat/HatFlex'
import { HatSkeleton } from '@/Hat/HatSkeleton'

export function TitledListPage({ children, ...restProps }: TitledPageProps) {
  return (
    <TitledPage {...restProps}>
      <Suspense
        fallback={
          <HatFlex.Col>
            <HatSkeleton.Pane />
            <HatSkeleton.Pane />
            <HatSkeleton.Pane />
          </HatFlex.Col>
        }
      >
        <div className={styles.contents}>{children}</div>
      </Suspense>
    </TitledPage>
  )
}
