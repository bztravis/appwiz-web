export function objToFormData(obj: Record<string, unknown>) {
  const formData = new FormData()

  for (const key in obj) {
    if (
      obj[key] !== undefined &&
      obj[key] !== null &&
      Object.keys(obj[key]).length !== 0
    ) {
      formData.append(key, obj[key] as string) // fixme: type assertion
    }
  }

  return formData
}
