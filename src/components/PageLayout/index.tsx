'use client'

import styles from './PageLayout.module.scss'
import { BreadCrumbs, Crumb } from '../BreadCrumbs'
import HomeLine from '../../assets/icons/HomeLine.svg'

type PageLayoutProps = {
  crumbs: Crumb[]
  children: React.ReactNode
}

export function PageLayout({ crumbs, children }: PageLayoutProps) {
  return (
    <div className={styles.container}>
      <div className={styles.crumbs}>
        {crumbs.length > 0 && (
          <BreadCrumbs
            crumbs={[{ icon: <HomeLine />, to: '/tasks' }, ...crumbs]}
          />
        )}
      </div>

      <div className={styles.content}>{children}</div>
    </div>
  )
}
