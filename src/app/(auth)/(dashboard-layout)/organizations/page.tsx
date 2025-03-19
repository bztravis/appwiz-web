'use client'

import { PageLayout } from '@/components/PageLayout'
import { TitledListPage } from '@/components/TitledListPage'
import { HatBits } from '@/Hat/HatBits'
import { HatFlex } from '@/Hat/HatFlex'
import { HatModal } from '@/Hat/HatModal'
import { HatPane } from '@/Hat/HatPane'
import { HatTextInput } from '@/Hat/HatTextInput'
import { getPageTitle } from '@/utils/getPageTitle'
import { useState } from 'react'

export default function Page() {
  return (
    <>
      <title>{getPageTitle('Organizations')}</title>

      <PageLayout crumbs={[{ label: 'Organizations', to: '/organizations' }]}>
        <PageImpl />
      </PageLayout>
    </>
  )
}

function PageImpl() {
  const [joinOpen, setJoinOpen] = useState(false)

  return (
    <>
      <TitledListPage
        title="Organizations"
        actions={{
          primary: {
            label: 'Join organization',
            onClick: () => setJoinOpen(true),
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

      <HatModal
        open={joinOpen}
        title="Join an organization"
        cancelAction={{ label: 'Nevermind', onClick: () => setJoinOpen(false) }}
        actions={[
          {
            label: 'Join',
            onClick: () => {
              setJoinOpen(false)
            },
          },
        ]}
      >
        <HatTextInput size="lg" name="code" placeholder="Join code" autoFocus />
      </HatModal>
    </>
  )
}
