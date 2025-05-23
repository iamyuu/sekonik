import { useSuspenseQuery } from '@tanstack/react-query'
import { trpc } from '@/utils/trpc'

export function useProductCategories() {
  return useSuspenseQuery(
    trpc.product.getAllCategories.queryOptions(),
  )
}
