'use client'

import styles from './PageLayout.module.scss'
import { BreadCrumbs, Crumb } from '../BreadCrumbs'
import { TitledList } from '../TitledList'
import { HatActionProps } from '@/Hat/utils'
import HomeLine from '../../assets/icons/HomeLine.svg'

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
        {crumbs.length > 0 && (
          <BreadCrumbs
            crumbs={[{ icon: <HomeLine />, to: '/tasks' }, ...crumbs]}
          />
        )}
      </div>

      <div className={styles.content}>
        <TitledList title={title} actions={actions}>
          {children}
        </TitledList>
      </div>
    </div>
  )
}
