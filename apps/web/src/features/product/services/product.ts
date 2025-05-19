import { useSuspenseInfiniteQuery } from '@tanstack/react-query'
import { queryClient } from '@/utils/query-client'
import { trpc } from '@/utils/trpc'

export async function prefetchProducts(input: ProductQueryDTO = {}) {
  await queryClient.ensureQueryData(trpc.product.getProducts.queryOptions(input))
}

export function useProducts(input: ProductQueryDTO = {}) {
  return useSuspenseInfiniteQuery(
    trpc.product.getProducts.infiniteQueryOptions(input, {
      getNextPageParam: lastPage => lastPage.meta.nextCursor,
    }),
  )
}

export type ProductDTO = typeof trpc.product.getProducts['~types']['output']['items'][number]

export type ProductQueryDTO = typeof trpc.product.getProducts['~types']['input']
