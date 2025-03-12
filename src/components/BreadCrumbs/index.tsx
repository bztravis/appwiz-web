import { HatFlex } from '@/Hat/HatFlex'
import ArrowRightLine from '../../assets/icons/ArrowRightLine.svg'
import styles from './BreadCrumbs.module.scss'
import { HatLink } from '@/Hat/HatLink'

export type Crumb = {
  label: string
  to: string
}

type BreadCrumbsProps = {
  crumbs: Crumb[]
}

export function BreadCrumbs({ crumbs }: BreadCrumbsProps) {
  const components = crumbs
    .map((crumb, i) => [
      <HatLink
        size="md"
        color="faint"
        underline={false}
        to={crumb.to}
        key={crumb.label}
      >
        {crumb.label}
      </HatLink>,
      i !== crumbs.length - 1 ? (
        <ArrowRightLine key={crumb.label + 'a'} />
      ) : null,
    ])
    .flatMap((item) => item)

  return (
    <div className={styles.container}>
      <HatFlex.Row padding="md" gap="xs" align="center">
        {components}
      </HatFlex.Row>
    </div>
  )
}
