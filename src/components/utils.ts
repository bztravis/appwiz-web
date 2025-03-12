import { cloneElement } from 'react'

export function reactJoinWith<TArrayItem>(
  array: TArrayItem[],
  renderItem: (item: TArrayItem) => React.ReactElement,
  separator: React.ReactElement,
  arrayKeyFn: (item: TArrayItem, idx: number) => string = (item, idx) =>
    `item${idx}`,
  separatorKeyFn: (item: TArrayItem, idx: number) => string = (item, idx) =>
    `separator${idx}`
) {
  return array
    .flatMap((item, idx) => [
      // eslint-disable-next-line @eslint-react/no-clone-element
      cloneElement(renderItem(item), { key: arrayKeyFn(item, idx) }),
      idx < array.length - 1
        ? // eslint-disable-next-line @eslint-react/no-clone-element
          cloneElement(separator, { key: separatorKeyFn(item, idx) })
        : null,
    ])
    .filter(Boolean) as React.ReactElement[]
}
