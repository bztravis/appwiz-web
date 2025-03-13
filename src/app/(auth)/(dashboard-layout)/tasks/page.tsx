'use client'

import { EmptyState } from '@/components/EmptyState'
import { getPageTitle } from '@/utils/getPageTitle'
import CheckDoubleLine from '../../../../assets/icons/CheckDoubleLine.svg'
import { HatText } from '@/Hat/HatText'
import { HatFlex } from '@/Hat/HatFlex'

export default function Page() {
  return (
    <>
      <title>{getPageTitle('My Tasks')}</title>

      <PageImpl />
    </>
  )
}

function PageImpl() {
  return (
    <EmptyState
      icon={<CheckDoubleLine />}
      message={
        <HatFlex.Col>
          <HatText.p size="md" align="center">
            You don’t have any tasks to complete right now.
          </HatText.p>
          <HatText.p size="md" align="center">
            Thanks for chipping in!
          </HatText.p>
        </HatFlex.Col>
      }
    />
  )
}
