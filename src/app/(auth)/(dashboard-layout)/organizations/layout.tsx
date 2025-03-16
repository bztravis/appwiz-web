'use client'

import { PageLayout } from '@/components/PageLayout'
import { TitledListPage } from '@/components/TitledListPage'

export default function Layout({ children }: { children: React.ReactNode }) {
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
        {children}
      </TitledListPage>
    </PageLayout>
  )
}
