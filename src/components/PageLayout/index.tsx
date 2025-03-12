'use client'

import styles from './PageLayout.module.scss'
import { BreadCrumbs, Crumb } from '../BreadCrumbs'
import { TitledList } from '../TitledList'
import { HatActionProps } from '@/Hat/utils'

type PageLayoutProps = {
  title: string
  crumbs: Crumb[]
  actions?: {
    primary: HatActionProps
    others?: HatActionProps[]
  }
  children: React.ReactNode
}

export function PageLayout({
  title,
  crumbs,
  actions,
  children,
}: PageLayoutProps) {
  return (
    <div className={styles.container}>
      <div className={styles.crumbs}>
        {crumbs.length > 0 && <BreadCrumbs crumbs={crumbs} />}
      </div>

      <div className={styles.content}>
        <TitledList title={title} actions={actions}>
          {children}
        </TitledList>
      </div>
    </div>
  )
}
