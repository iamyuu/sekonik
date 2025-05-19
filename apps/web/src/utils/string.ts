export function castUnion<T extends string>(value: string, enumValues: readonly T[]) {
  const isCastable = enumValues.includes(value as T)

  if (!isCastable) {
    return undefined
  }

  return value as T
}
