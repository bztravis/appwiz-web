'use client'

import { HatPadding } from '@/Hat/HatPadding'
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
import { useState } from 'react'
import styleBuilder from '@/utils/styleBuilder'

export function SideBar() {
  const user = useUser()

  const [open, setOpen] = useState(false)

  return (
    <nav className={styles.container}>
      <HatPadding sizeHorizontal="sm">
        <HatFlex.Row justify="between" align="center">
          <Logo size="md" />

          <span className={styles.menuButton}>
            <HatButton
              size="sm"
              color="secondary"
              icon={<MenuLine />}
              onClick={() => setOpen((prev) => !prev)}
            ></HatButton>
          </span>
        </HatFlex.Row>
      </HatPadding>

      <div className={styleBuilder([styles.content, [styles.closed, !open]])}>
        <HatFlex.Col gap="xxxl">
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

          {/* <HatFlex.Col gap="sm">
          <HatText size="sm">MHacks Hackathon</HatText>
          <HatFlex.Col>
            <Link href="/dashboard" className={styles.navLink}>
              <HatText size="md">My Tasks</HatText>
            </Link>

            <Link href="/dashboard" className={styles.navLink}>
              <HatText size="md">My Tasks</HatText>
            </Link>

            <Link href="/dashboard" className={styles.navLink}>
              <HatText size="md">My Tasks</HatText>
            </Link>
          </HatFlex.Col>

          <HatText size="sm">MDST</HatText>

          <HatText size="sm">New Organization</HatText>
        </HatFlex.Col> */}
        </HatFlex.Col>

        <HatFlex.Row justify="between" padding="sm">
          <HatFlex.Row align="center" gap="sm">
            <HatAvatar name={user.email ?? '' /* fixme: */}></HatAvatar>

            <HatButton
              color="secondary"
              onClick={async () => {
                const { error } = await supabase.auth.signOut()
                if (error) console.error('Sign out error', error) // fixme:
                window.location.href = '/login'
              }}
            >
              Sign out
            </HatButton>
          </HatFlex.Row>
        </HatFlex.Row>
      </div>
    </nav>
  )

  function onNavigate() {
    setOpen(false)
  }
}
