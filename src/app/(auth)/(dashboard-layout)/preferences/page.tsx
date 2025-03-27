'use client'

import { PageLayout } from '@/components/PageLayout'
import { TitledPage } from '@/components/TitledPage'
import { HatButton } from '@/Hat/HatButton'
import { HatFlex } from '@/Hat/HatFlex'
import { HatText } from '@/Hat/HatText'
import { useProfile, useUser } from '@/hooks/useUser'
import { signOut } from '@/utils/auth'
import { getPageTitle } from '@/utils/getPageTitle'
import { supabase } from '@/utils/supabase/client'
import { queryClient } from '@/utils/tanstackQuery'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

export default function Page() {
  return (
    <>
      <title>{getPageTitle('Preferences')}</title>

      <PageLayout crumbs={[{ label: 'Preferences', to: '/preferences' }]}>
        <PageImpl />
      </PageLayout>
    </>
  )
}

function PageImpl() {
  const user = useUser()
  const profile = useProfile()
  const router = useRouter()

  const { mutateAsync } = useMutation({
    mutationFn: async () => {
      const { error } = await supabase
        .from('profiles')
        .update({ name: '' })
        .eq('id', user.id)

      if (error) {
        throw error
      }
    },
    onError: (error) => {
      toast.error(error.message)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile'] })
      router.push('/setup')
    },
  })

  return (
    <TitledPage title="Preferences">
      <HatFlex.Col gap="lg">
        <HatFlex.Row gap="md" justify="between" align="center" wrap={true}>
          <HatFlex.Col fitContent={true}>
            <HatText.p size="md">
              <b>{profile.name}</b>
            </HatText.p>

            <HatText.p size="sm" color="hushed">
              {user.email}
            </HatText.p>
          </HatFlex.Col>

          <HatButton color="secondary" size="md" onClick={signOut}>
            Sign out
          </HatButton>
        </HatFlex.Row>

        <HatFlex.Row gap="md" justify="between" align="center" wrap={true}>
          <HatFlex.Col fitContent={true}>
            <HatText.p size="md">
              <b>Redo onboarding</b>
            </HatText.p>

            <HatText.p size="sm" color="hushed">
              This will reset your onboarding progress and allow you to
              re-complete it.
            </HatText.p>
          </HatFlex.Col>

          <HatButton color="secondary" size="md" onClick={mutateAsync}>
            Redo onboarding
          </HatButton>
        </HatFlex.Row>
      </HatFlex.Col>
    </TitledPage>
  )
}
