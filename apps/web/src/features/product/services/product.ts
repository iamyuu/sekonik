import { useSuspenseQuery } from '@tanstack/react-query'
import { queryClient } from '@/utils/query-client'
import { trpc } from '@/utils/trpc'

export function prefetchProducts() {
  return queryClient.ensureQueryData(trpc.product.getProducts.queryOptions())
}

export function useProducts() {
  return useSuspenseQuery(trpc.product.getProducts.queryOptions())
}

export type ProductDTO = Awaited<ReturnType<typeof useProducts>>['data']['items'][number]
