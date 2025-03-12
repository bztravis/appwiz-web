'use client'

import { HatText } from '@/Hat/HatText'
import { getPageTitle } from '@/utils/getPageTitle'

export default function Page() {
  return (
    <>
      <title>{getPageTitle('Organizations')}</title>

      <PageImpl />
    </>
  )
}

function PageImpl() {
  return <HatText.p>Organizations</HatText.p>
}
