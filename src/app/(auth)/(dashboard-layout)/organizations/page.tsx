'use client'

import { HatBits } from '@/Hat/HatBits'
import { HatFlex } from '@/Hat/HatFlex'
import { HatPane } from '@/Hat/HatPane'
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
  return (
    <HatFlex.Col>
      <HatPane
        label={'MHacks'}
        description={<HatBits bits={['3 application cycles', '26 members']} />}
        to="/organizations/mhacks"
      />

      <HatPane
        label={'MDST'}
        description={<HatBits bits={['0 application cycles', '1 member']} />}
        to="/organizations/mhacks"
      />

      <HatPane
        label={'Michigan Hackers'}
        description={<HatBits bits={['10 application cycles', '5 members']} />}
        to="/organizations/mhacks"
      />
    </HatFlex.Col>
  )
}
