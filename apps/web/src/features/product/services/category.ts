import type { QueryClient } from '@tanstack/react-query'
import { useSuspenseQuery } from '@tanstack/react-query'
import { trpc } from '@/utils/trpc'

export async function prefetchCategories(queryClient: QueryClient) {
  return await queryClient.ensureQueryData(
    trpc.product.getAllCategories.queryOptions({}),
  )
}

export function useProductCategories(input: ComboboxCategoryDTO = {}) {
  return useSuspenseQuery(
    trpc.product.getAllCategories.queryOptions(input),
  )
}

export type ComboboxCategoryDTO = typeof trpc.product.getAllCategories['~types']['input']
