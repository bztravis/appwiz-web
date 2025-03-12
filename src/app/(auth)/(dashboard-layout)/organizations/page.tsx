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
        description={
          <HatBits
            bits={['661 applications', '23 readers', 'Dec 21st, 2024']}
          />
        }
        actions={[{ label: 'View' }]}
      />

      <HatPane
        label={'MHacks'}
        description={
          <HatBits
            bits={['661 applications', '23 readers', 'Dec 21st, 2024']}
          />
        }
        actions={[{ label: 'View' }]}
      />

      <HatPane
        label={'MHacks'}
        description={
          <HatBits
            bits={['661 applications', '23 readers', 'Dec 21st, 2024']}
          />
        }
        actions={[{ label: 'View' }]}
      />
    </HatFlex.Col>
  )
}
