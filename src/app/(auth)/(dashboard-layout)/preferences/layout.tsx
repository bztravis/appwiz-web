import { PageLayout } from '@/components/PageLayout'
import { TitledPage } from '@/components/TitledPage'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <PageLayout crumbs={[{ label: 'Preferences', to: '/preferences' }]}>
      <TitledPage title="Preferences">{children}</TitledPage>
    </PageLayout>
  )
}
