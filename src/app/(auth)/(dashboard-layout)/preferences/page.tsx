'use client'

import { PageLayout } from '@/components/PageLayout'
import { TitledPage } from '@/components/TitledPage'
import { HatButton } from '@/Hat/HatButton'
import { HatFlex } from '@/Hat/HatFlex'
import { HatText } from '@/Hat/HatText'
import { useUser } from '@/hooks/useUser'
import { getPageTitle } from '@/utils/getPageTitle'
import { toast } from 'sonner'

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
      <HatFlex.Col gap="sm" align="start">
        {user.email}

        <HatButton color="secondary" onClick={() => toast.success('Yahoo!')}>
          Toast
        </HatButton>

        <HatButton
          color="secondary"
          onClick={() => {
            throw new Error('uh oh')
          }}
        >
          Error
        </HatButton>

        {Array(64)
          .fill(null)
          .map((_, i) => (
            // eslint-disable-next-line @eslint-react/no-array-index-key
            <HatText.p size="sm" key={i}>
              Preferences
            </HatText.p>
          ))}
      </HatFlex.Col>
    </TitledPage>
  )
}
