'use client'

import { HatFlex } from '../HatFlex'
import { HatText } from '../HatText'
import { HatActionProps } from '../utils'
import styles from './HatPane.module.scss'
import Link from 'next/link'

type HatPaneProps = {
  label: string
  description?: string | React.ReactNode
  actions?: HatActionProps[]
} & HatActionProps

export function HatPane({ label, description, actions, to }: HatPaneProps) {
  if (!to) return <HatPaneImpl {...{ label, description, actions }} />

  return (
    <Link href={to!} aria-label={label} className={styles.link}>
      <HatPaneImpl {...{ label, description, actions }} />
    </Link>
  )
}

function HatPaneImpl({ label, description, actions }: HatPaneProps) {
  return (
    <div className={styles.container}>
      <HatFlex.Col gap="xs">
        <HatText.h2 size="lg">{label}</HatText.h2>

        {description && <HatText size="sm">{description}</HatText>}
      </HatFlex.Col>

      {actions?.map((action) => action.label)}
    </div>
  )
}
