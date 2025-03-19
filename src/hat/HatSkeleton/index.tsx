import styleBuilder from '@/utils/styleBuilder'
import { HatPane } from '../HatPane'
import styles from './HatSkeleton.module.scss'
import { HatFlex } from '../HatFlex'

export function HatSkeleton({ width = 1 }: { width?: number }) {
  return (
    <div
      className={styleBuilder([styles.basic, styles.pulse])}
      style={{ width: `${width * 100}%` }}
    ></div>
  )
}

HatSkeleton['Pane'] = () => (
  <HatPane
    label={''}
    description={
      <HatFlex.Col gap="xs">
        <HatSkeleton width={0.2} />

        <HatSkeleton width={0.3} />
      </HatFlex.Col>
    }
  />
)
