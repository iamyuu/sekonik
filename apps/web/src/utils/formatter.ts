import type { MaybeString } from '@/types/numeric'

export function formatCurrency(amount: MaybeString) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(Number(amount))
}
