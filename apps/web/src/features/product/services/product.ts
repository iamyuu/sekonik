import type { QueryClient } from '@tanstack/react-query'
import { useSuspenseQuery } from '@tanstack/react-query'
import { trpc } from '@/utils/trpc'

export async function prefetchFeaturedProducts(queryClient: QueryClient) {
  return await queryClient.ensureQueryData(
    trpc.product.getProducts.queryOptions({
      featured: true,
    }),
  )
}

export async function prefetchProducts(queryClient: QueryClient, input: ProductListQueryDTO) {
  return await queryClient.ensureQueryData(
    trpc.product.getProducts.queryOptions(input),
  )
}

export async function prefetchProductBySlug(queryClient: QueryClient, input: ProductBySlugInputDTO) {
  return await queryClient.ensureQueryData(
    trpc.product.getBySlug.queryOptions(input),
  )
}

export function useFeaturedProducts() {
  return useSuspenseQuery(
    trpc.product.getProducts.queryOptions({
      featured: true,
    }),
  )
}

export function useProducts(input: ProductListQueryDTO) {
  return useSuspenseQuery(
    trpc.product.getProducts.queryOptions(input),
  )
}

export function useProductBySlug(input: ProductBySlugInputDTO) {
  return useSuspenseQuery(
    trpc.product.getBySlug.queryOptions(input),
  )
}

export type ProductDTO = NonNullable<typeof trpc.product.getBySlug['~types']['output']>

export type ProductListDTO = NonNullable<typeof trpc.product.getProducts['~types']['output']['items']>

export type ProductListQueryDTO = typeof trpc.product.getProducts['~types']['input']

export type ProductBySlugInputDTO = typeof trpc.product.getBySlug['~types']['input']
