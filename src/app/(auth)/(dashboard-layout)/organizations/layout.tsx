import { PageLayout } from '@/components/PageLayout'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <PageLayout
      title="Organizations"
      crumbs={[{ label: 'Organizations', to: '/organizations' }]}
      actions={{
        primary: {
          label: 'Join organization',
        },
        others: [
          {
            label: 'Create organization',
          },
        ],
      }}
    >
      {children}
    </PageLayout>
  )
}
