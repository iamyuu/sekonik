import type { MaybeString } from '@/types/numeric'

export function calculateDiscountedPrice(price: MaybeString, discountPercentage: MaybeString) {
  return Number(price) * (1 - Number(discountPercentage) / 100)
}
