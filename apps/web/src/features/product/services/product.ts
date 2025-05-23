import { useSuspenseInfiniteQuery, useSuspenseQuery } from '@tanstack/react-query'
import { trpc } from '@/utils/trpc'

export function useFeaturedProducts() {
  return useSuspenseQuery(
    trpc.product.getProducts.queryOptions({
      featured: true,
    }),
  )
}

export function useProducts(input: ProductListQueryDTO) {
  return useSuspenseInfiniteQuery(
    trpc.product.getProducts.infiniteQueryOptions(input, {
      getNextPageParam: lastPage => lastPage.meta.nextCursor,
    }),
  )
}

export function useProductBySlug(input: typeof trpc.product.getBySlug['~types']['input']) {
  return useSuspenseQuery(
    trpc.product.getBySlug.queryOptions(input),
  )
}

export type ProductDTO = NonNullable<typeof trpc.product.getBySlug['~types']['output']>

export type ProductListDTO = NonNullable<typeof trpc.product.getProducts['~types']['output']['items']>

export type ProductListQueryDTO = typeof trpc.product.getProducts['~types']['input']
