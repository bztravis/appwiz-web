'use client'

import { PageLayout } from '@/components/PageLayout'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <PageLayout
      title="Organizations"
      crumbs={[{ label: 'Organizations', to: '/organizations' }]}
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
    </PageLayout>
  )
}
