'use client'

import { HatBaseProps } from '../utils'

import styles from './HatAvatar.module.scss'

type HatAvatarProps = {
  name: string
} & HatBaseProps

export function HatAvatar({ name }: HatAvatarProps) {
  const initials = name
    .split(' ')
    .filter((elem) => !!elem[0])
    .map((n, index) => (index < 2 ? n[0].toUpperCase() : ''))

  return <div className={styles.container}>{initials}</div>
}
