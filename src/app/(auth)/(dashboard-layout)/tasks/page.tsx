'use client'

import { EmptyState } from '@/components/EmptyState'
import { getPageTitle } from '@/utils/getPageTitle'
import CheckDoubleLine from '../../../../assets/icons/CheckDoubleLine.svg'

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
      message="You don’t have any tasks to complete right now. Thanks for chipping in!"
    />
  )
}
