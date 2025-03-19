'use client'

import { PageLayout } from '@/components/PageLayout'
import { TitledPage } from '@/components/TitledPage'
import { HatButton } from '@/Hat/HatButton'
import { HatFlex } from '@/Hat/HatFlex'
import { HatText } from '@/Hat/HatText'
import { useUser } from '@/hooks/useUser'
import { signOut } from '@/utils/auth'
import { getPageTitle } from '@/utils/getPageTitle'

export default function Page() {
  return (
    <>
      <title>{getPageTitle('Preferences')}</title>

      <PageLayout crumbs={[{ label: 'Preferences', to: '/preferences' }]}>
        <PageImpl />
      </PageLayout>
    </>
  )
}

function PageImpl() {
  const user = useUser()

  return (
    <TitledPage title="Preferences">
      <HatFlex.Row gap="md" justify="between" align="center" wrap={true}>
        <HatFlex.Col fitContent={true}>
          <HatText.p size="md">
            <b>Brian Travis</b>
          </HatText.p>

          <HatText.p size="sm" color="hushed">
            {user.email}
          </HatText.p>
        </HatFlex.Col>

        <HatButton color="secondary" size="md" onClick={signOut}>
          Sign out
        </HatButton>
      </HatFlex.Row>
    </TitledPage>
  )
}
