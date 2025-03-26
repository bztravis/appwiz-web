'use client'

import { Logo } from '../Logo'
import styles from './SideBar.module.scss'
import { HatFlex } from '@/Hat/HatFlex'
import { NavButton } from '../NavButton'
import InboxLine from '../../assets/icons/InboxLine.svg'
import OrganizationChartLine from '../../assets/icons/OrganizationChartLine.svg'
import ToggleLine from '../../assets/icons/ToggleLine.svg'
import { HatAvatar } from '@/Hat/HatAvatar'
import { useProfile } from '@/hooks/useUser'
import { HatButton } from '@/Hat/HatButton'
import MenuLine from '../../assets/icons/MenuLine.svg'
import CloseLine from '../../assets/icons/CloseLine.svg'
import { useState } from 'react'
import styleBuilder from '@/utils/styleBuilder'
import { signOut } from '@/utils/auth'
import { HatLink } from '@/Hat/HatLink'

export function SideBar() {
  const profile = useProfile()

  const [open, setOpen] = useState(false)

  return (
    <nav className={styles.container}>
      <div className={styles.scroller}>
        <div className={styles.top}>
          <HatLink to="/" aria-label="Home">
            <Logo size="md" />
          </HatLink>

          <span className={styles.menuButton}>
            <HatButton
              size="sm"
              color="secondary"
              icon={open ? <CloseLine /> : <MenuLine />}
              onClick={() => setOpen((prev) => !prev)}
            ></HatButton>
          </span>
        </div>

        <div className={styleBuilder([styles.groups, [styles.closed, !open]])}>
          <HatFlex.Col align="stretch">
            <NavButton label="My Tasks" icon={<InboxLine />} path="/tasks" />

            <NavButton
              label="Organizations"
              icon={<OrganizationChartLine />}
              path="/organizations"
            />

            <NavButton
              label="Preferences"
              icon={<ToggleLine />}
              path="/preferences"
            />
          </HatFlex.Col>
        </div>
      </div>

      <div className={styles.user}>
        <HatFlex.Row align="center" gap="sm">
          <HatAvatar name={profile.name}></HatAvatar>

          <HatButton color="secondary" size="sm" onClick={signOut}>
            Sign out
          </HatButton>
        </HatFlex.Row>
      </div>
    </nav>
  )
}
