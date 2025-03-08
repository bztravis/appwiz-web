'use client'

import { HatText } from '@/Hat/HatText'
import styles from './NavButton.module.scss'
import Link from 'next/link'
import styleBuilder from '@/utils/styleBuilder'
import { usePathname } from 'next/navigation'

type NavButtonProps = {
  label: string
  icon: React.ReactNode
  path: string
}

export function NavButton({ label, icon, path }: NavButtonProps) {
  const pathname = usePathname()

  return (
    <Link
      href={path}
      className={styleBuilder([
        styles.container,
        [styles.active, pathname === path],
      ])}
    >
      <div className={styles.block}></div>

      {icon}

      <HatText size="md">{label}</HatText>
    </Link>
  )
}
