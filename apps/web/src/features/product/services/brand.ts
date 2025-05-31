import type { QueryClient } from '@tanstack/react-query'
import { useSuspenseQuery } from '@tanstack/react-query'
import { trpc } from '@/utils/trpc'

export async function prefetchBrands(queryClient: QueryClient) {
  return await queryClient.ensureQueryData(
    trpc.product.getAllBrands.queryOptions({}),
  )
}

export function useProductBrands(input: ComboboxBrandDTO = {}) {
  return useSuspenseQuery(
    trpc.product.getAllBrands.queryOptions(input),
  )
}

export type ComboboxBrandDTO = typeof trpc.product.getAllBrands['~types']['input']
