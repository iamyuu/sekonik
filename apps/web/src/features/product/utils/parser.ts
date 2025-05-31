import type { ProductListQueryDTO } from '../services/product'
import { SearchParamsSchema } from '../schemas/product-query'

export function parseSearchParams(searchParams: URLSearchParams) {
  // use `safeParse` to prevent throw error if parsing failed
  const result = SearchParamsSchema.safeParse({
    // Search
    keyword: searchParams.get('q'),

    // Sorting
    sort: searchParams.get('sort'),

    // Pagination
    page: searchParams.get('page'),
    pageSize: searchParams.get('size'),

    // Filtering
    brand: searchParams.get('brand'),
    category: searchParams.get('category'),

    minPrice: searchParams.get('minPrice'),
    maxPrice: searchParams.get('maxPrice'),

    minStock: searchParams.get('minStock'),
  })

  if (!result.success) {
    return {} as ProductListQueryDTO
  }

  return result.data as any as ProductListQueryDTO
}
