'use client'

import { HatText } from '@/Hat/HatText'
import { getPageTitle } from '@/utils/getPageTitle'

export default function Page() {
  return (
    <>
      <title>{getPageTitle('Preferences')}</title>

      <PageImpl />
    </>
  )
}

function PageImpl() {
  return <HatText.p>Preferences</HatText.p>
}
