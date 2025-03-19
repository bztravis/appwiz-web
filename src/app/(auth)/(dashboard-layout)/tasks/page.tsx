'use client'

import { EmptyState } from '@/components/EmptyState'
import { getPageTitle } from '@/utils/getPageTitle'
import CheckDoubleLine from '../../../../assets/icons/CheckDoubleLine.svg'
import { HatText } from '@/Hat/HatText'
import { HatFlex } from '@/Hat/HatFlex'
import { PageLayout } from '@/components/PageLayout'
import { TitledPage } from '@/components/TitledPage'

export default function Page() {
  return (
    <>
      <title>{getPageTitle('My Tasks')}</title>

      <PageLayout crumbs={[{ label: 'My Tasks', to: '/tasks' }]}>
        <PageImpl />
      </PageLayout>
    </>
  )
}

function PageImpl() {
  return (
    <TitledPage title={'My tasks'}>
      <EmptyState
        icon={<CheckDoubleLine />}
        message={
          <HatFlex.Col>
            <HatText.p size="md" align="center">
              You don’t have any applications to read right now.
            </HatText.p>
            <HatText.p size="md" align="center">
              Once your organization assigns you some, they’ll appear here.
            </HatText.p>
          </HatFlex.Col>
        }
        actions={[
          {
            label: 'Join an organization',
            to: '/organizations',
            buttonProps: { color: 'secondary' },
          },
        ]}
      />
    </TitledPage>
  )
}
