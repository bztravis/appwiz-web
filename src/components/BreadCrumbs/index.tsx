import { HatFlex } from '@/Hat/HatFlex'
import ArrowRightLine from '../../assets/icons/ArrowRightLine.svg'
import styles from './BreadCrumbs.module.scss'
import { HatLink } from '@/Hat/HatLink'
import styleBuilder from '@/utils/styleBuilder'
import { reactJoinWith } from '../utils'

export type Crumb = {
  to: string
} & (
  | {
      label: string
      icon?: never
    }
  | {
      label?: never
      icon: React.ReactNode
    }
)

type BreadCrumbsProps = {
  crumbs: Crumb[]
}

export function BreadCrumbs({ crumbs }: BreadCrumbsProps) {
  const components = reactJoinWith(
    crumbs,
    (crumb) => <Segment crumb={crumb} />,
    <ArrowRightLine />
  )

  return (
    <div className={styles.container}>
      <HatFlex.Row align="center" wrap={true}>
        {components}
      </HatFlex.Row>
    </div>
  )
}

function Segment({ crumb }: { crumb: Crumb }) {
  return (
    <span className={styleBuilder([styles.segment])}>
      <HatLink size="md" color="faint" underline={false} to={crumb.to}>
        {crumb.icon ? crumb.icon : crumb.label}
      </HatLink>
    </span>
  )
}
