/**
 * Cast a string to a union type if it is a valid value.
 *
 * @example
 * ```ts
 * const value = castUnion('foo', ['foo', 'bar'])
 *    // ^? 'foo' | 'bar' | undefined
 * ```
 */
export function castUnion<T extends string>(value: string, enumValues: readonly T[]) {
  const isCastable = enumValues.includes(value as T)

  if (!isCastable) {
    return undefined
  }

  return value as T
}
