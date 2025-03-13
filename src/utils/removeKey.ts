export function removeKey<T extends object, K extends keyof T>(
  obj: T,
  key: K
): Omit<T, K> {
  const rest = structuredClone(obj)
  delete rest[key]
  return rest
}

export function removeKeys<T extends object, K extends Array<keyof T>>(
  obj: T,
  keys: K
): Omit<T, K[number]> {
  const rest = structuredClone(obj)
  keys.forEach((key) => {
    delete rest[key]
  })
  return rest
}
