import { HatFlex } from '@/Hat/HatFlex'
import ArrowRightLine from '../../assets/icons/ArrowRightLine.svg'
import styles from './BreadCrumbs.module.scss'
import { HatLink } from '@/Hat/HatLink'
import styleBuilder from '@/utils/styleBuilder'

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
  const components = crumbs
    .map((crumb, idx) => [
      // eslint-disable-next-line @eslint-react/no-array-index-key
      <Segment crumb={crumb} key={idx} />,
      idx !== crumbs.length - 1 ? (
        <ArrowRightLine key={crumb.label + 'a'} />
      ) : null,
    ])
    .flatMap((item) => item)

  return (
    <div className={styles.container}>
      <HatFlex.Row padding="md" align="center">
        {components}
      </HatFlex.Row>
    </div>
  )
}

function Segment({ crumb }: { crumb: Crumb }) {
  return (
    <span className={styleBuilder([styles.segment])}>
      <HatLink size="md" color="faint" underline={false} to={crumb.to}>
        {crumb.icon ? (
          <span style={{ display: 'contents' }}>{crumb.icon}</span>
        ) : (
          crumb.label
        )}
      </HatLink>
    </span>
  )
}
