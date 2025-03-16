import { TitledPage, TitledPageProps } from '../TitledPage'
import styles from './TitledListPage.module.scss'

export function TitledListPage({ children, ...restProps }: TitledPageProps) {
  return (
    <TitledPage {...restProps}>
      <div className={styles.contents}>{children}</div>
    </TitledPage>
  )
}
