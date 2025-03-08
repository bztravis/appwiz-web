'use client'

import { HatPadding } from '@/Hat/HatPadding'
import { Logo } from '../Logo'
import styles from './SideBar.module.scss'
import { HatFlex } from '@/Hat/HatFlex'
import { NavButton } from '../NavButton'
import InboxLine from '../../assets/icons/InboxLine.svg'
import OrganizationChartLine from '../../assets/icons/OrganizationChartLine.svg'
import ToggleLine from '../../assets/icons/ToggleLine.svg'

export function SideBar() {
  return (
    <nav className={styles.container}>
      <HatFlex.Col gap="xxxl">
        <HatFlex.Col gap="md">
          <HatPadding sizeHorizontal="sm">
            <Logo size="md" />
          </HatPadding>

          <HatFlex.Col align="stretch">
            <NavButton label="My Tasks" icon={<InboxLine />} path="/" />

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
    </nav>
  )
}
