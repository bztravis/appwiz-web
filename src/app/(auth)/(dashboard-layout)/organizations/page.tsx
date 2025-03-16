'use client'

import { PageLayout } from '@/components/PageLayout'
import { TitledListPage } from '@/components/TitledListPage'
import { HatBits } from '@/Hat/HatBits'
import { HatFlex } from '@/Hat/HatFlex'
import { HatPane } from '@/Hat/HatPane'
import { getPageTitle } from '@/utils/getPageTitle'

export default function Page() {
  return (
    <>
      <title>{getPageTitle('Organizations')}</title>

      <PageImpl />
    </>
  )
}

function PageImpl() {
  return (
    <PageLayout crumbs={[{ label: 'Organizations', to: '/organizations' }]}>
      <TitledListPage
        title="Organizations"
        actions={{
          primary: {
            label: 'Join organization',
            onClick: () => {
              prompt('Enter the organization’s join code')
            },
          },
          others: [
            {
              label: 'Create organization',
              onClick: () => {
                alert('Create organization')
              },
            },
          ],
        }}
      >
        <HatFlex.Col>
          <HatPane
            label={'MHacks'}
            description={
              <HatBits bits={['3 application cycles', '26 members']} />
            }
            to="/organizations/mhacks"
          />

          <HatPane
            label={'MDST'}
            description={
              <HatBits bits={['0 application cycles', '1 member']} />
            }
            to="/organizations/mhacks"
          />

          <HatPane
            label={'Michigan Hackers'}
            description={
              <HatBits bits={['10 application cycles', '5 members']} />
            }
            to="/organizations/mhacks"
          />
        </HatFlex.Col>
      </TitledListPage>
    </PageLayout>
  )
}
