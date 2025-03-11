'use client'

import { HatButton } from '@/Hat/HatButton'
import { HatFlex } from '@/Hat/HatFlex'
import { HatText } from '@/Hat/HatText'
import { useUser } from '@/hooks/useUser'
import { getPageTitle } from '@/utils/getPageTitle'
import { toast } from 'sonner'

export default function Page() {
  const user = useUser()

  return (
    <>
      <title>{getPageTitle('My Tasks')}</title>

      <HatFlex.Col gap="sm">
        {user.email}

        <HatText.p>My Tasks</HatText.p>

        <HatButton color="secondary" onClick={() => toast.success('Yahoo!')}>
          Toast
        </HatButton>

        <HatButton
          color="secondary"
          onClick={() => {
            throw new Error('uh oh')
          }}
        >
          Error
        </HatButton>

        {Array(100)
          .fill(null)
          .map((_, i) => (
            // eslint-disable-next-line @eslint-react/no-array-index-key
            <HatText.p key={i}>My Tasks</HatText.p>
          ))}
      </HatFlex.Col>
    </>
  )
}
