import { PageLayout } from '@/components/PageLayout'
import { TitledPage } from '@/components/TitledPage'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <PageLayout crumbs={[{ label: 'My Tasks', to: '/tasks' }]}>
      <TitledPage title={'My tasks'}>{children}</TitledPage>
    </PageLayout>
  )
}
