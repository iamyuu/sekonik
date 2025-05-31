import type { MaybeString } from '@/types/numeric'

export function calculateDiscountedPrice(price: MaybeString, discountPercentage: MaybeString, quantity: number = 1) {
  const priceNumber = Number(price)
  const discountPercentageNumber = Number(discountPercentage)

  return priceNumber * (1 - discountPercentageNumber / 100) * quantity
}
