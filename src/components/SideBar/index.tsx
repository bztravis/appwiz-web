'use client'

import { Logo } from '../Logo'
import styles from './SideBar.module.scss'
import { HatFlex } from '@/Hat/HatFlex'
import { NavButton } from '../NavButton'
import InboxLine from '../../assets/icons/InboxLine.svg'
import OrganizationChartLine from '../../assets/icons/OrganizationChartLine.svg'
import ToggleLine from '../../assets/icons/ToggleLine.svg'
import { HatAvatar } from '@/Hat/HatAvatar'
import { useUser } from '@/hooks/useUser'
import { HatButton } from '@/Hat/HatButton'
import { supabase } from '@/utils/supabase/client'
import MenuLine from '../../assets/icons/MenuLine.svg'
import CloseLine from '../../assets/icons/CloseLine.svg'
import { useState } from 'react'
import styleBuilder from '@/utils/styleBuilder'

export function SideBar() {
  const user = useUser()

  const [open, setOpen] = useState(false)

  return (
    <nav className={styles.container}>
      <div className={styles.scroller}>
        <div className={styles.top}>
          <Logo size="md" />

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
            <NavButton
              label="My Tasks"
              icon={<InboxLine />}
              path="/tasks"
              onNavigate={onNavigate}
            />

            <NavButton
              label="Organizations"
              icon={<OrganizationChartLine />}
              path="/organizations"
              onNavigate={onNavigate}
            />

            <NavButton
              label="Preferences"
              icon={<ToggleLine />}
              path="/preferences"
              onNavigate={onNavigate}
            />
          </HatFlex.Col>
        </div>
      </div>

      <div className={styles.user}>
        <HatFlex.Row align="center" gap="sm">
          <HatAvatar name={user.email ?? '' /* fixme: */}></HatAvatar>

          <HatButton
            color="secondary"
            onClick={async () => {
              const { error } = await supabase.auth.signOut()
              if (error) console.error('Sign out error', error) // fixme:
              window.location.href = '/login' // fixme:
            }}
          >
            Sign out
          </HatButton>
        </HatFlex.Row>
      </div>
    </nav>
  )

  function onNavigate() {
    // setOpen(false)
  }
}
