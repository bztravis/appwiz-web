'use client'

import { useSuspenseQuery } from '@tanstack/react-query'

let done = false

export function PrefectchQueries() {
  if (!done)
    throw new Promise((resolve) =>
      setTimeout(() => {
        done = true
        resolve('done')
      }, 20000)
    )

  // const { data, isError } = useSuspenseQuery({
  //   queryKey: ['2'],
  //   queryFn: async () => {
  //     await new Promise((resolve) => setTimeout(resolve, 3000))
  //     return { name: 'John Doe' }
  //   },
  // })

  return <div>done</div>
}
