import { PageLayout } from '@/components/PageLayout'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <PageLayout title="My tasks" crumbs={[{ label: 'My Tasks', to: '/tasks' }]}>
      {children}
    </PageLayout>
  )
}
