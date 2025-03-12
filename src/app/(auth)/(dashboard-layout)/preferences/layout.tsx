import { PageLayout } from '@/components/PageLayout'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <PageLayout
      title="Preferences"
      crumbs={[{ label: 'Preferences', to: '/preferences' }]}
    >
      {children}
    </PageLayout>
  )
}
