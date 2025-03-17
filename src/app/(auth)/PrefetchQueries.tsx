'use client'

import { useSuspenseQuery } from '@tanstack/react-query'

export function PrefectchQueries() {
  const { data, isError } = useSuspenseQuery({
    queryKey: ['2'],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000))
      return { name: 'John Doe' }
    },
  })

  return <div>done</div>
}
