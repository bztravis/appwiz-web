'use client'

import styleBuilder from '@/utils/styleBuilder'
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

export function HatPane({
  label,
  description,
  actions,
  to,
  onClick,
  ...restProps
}: HatPaneProps) {
  if (!to) return <HatPaneImpl {...{ label, description, actions }} />

  return (
    <Link
      href={to!}
      aria-label={label}
      className={styleBuilder([
        styles.link,
        [styles.clickable, !!to || !!onClick],
      ])}
    >
      <HatPaneImpl
        {...{ label, description, actions, to, onClick, ...restProps }}
      />
    </Link>
  )
}

function HatPaneImpl({
  label,
  description,
  actions,
  to,
  onClick, // TODO: implement onClick and actions
}: HatPaneProps) {
  return (
    <div
      className={styleBuilder([
        styles.container,
        [styles.clickable, !!to || !!onClick],
      ])}
    >
      <HatFlex.Col gap="xs">
        <HatText.h2 size="lg">{label}</HatText.h2>

        {description && typeof description === 'string' ? (
          <HatText size="sm" color="hushed">
            {description}
          </HatText>
        ) : (
          description
        )}
      </HatFlex.Col>

      {actions?.map((action) => action.label)}
    </div>
  )
}
