import type { ProductListQueryDTO } from '../services/product'
import { useInViewEffect } from 'react-hook-inview'
import { useSearchParams } from 'react-router'
import { PendingFallback } from '@/components/fallback/pending-fallback'
import { castUnion } from '@/utils/string'
import { useProducts } from '../services/product'
import { ProductList } from './product-list'

export function ProductFilterResult() {
  const [searchParams] = useSearchParams()
  const query = parseSearchParams(searchParams)

  const products = useProducts(query)

  const loadMoreRef = useInViewEffect(
    ([entry], observer) => {
      if (entry.isIntersecting && products.hasNextPage && !products.isFetchingNextPage) {
        products.fetchNextPage()
        observer.unobserve(entry.target)
      }
    },
    { threshold: 0.25 },
  )

  const items = products.data?.pages.flatMap(page => page.items) ?? []

  return (
    <div>
      <div className="grid grid-auto-fit-[250px] gap-4">
        <ProductList products={items} />
      </div>

      <div ref={loadMoreRef} className="flex items-center justify-center h-[50px] mt-4">
        {products.isFetchingNextPage ? <PendingFallback /> : null}
      </div>
    </div>
  )
}

function parseSearchParams(searchParams: URLSearchParams) {
  const sort = searchParams.get('sort')?.split('-') || []

  const sortBy = castUnion(sort[0], ['createdAt', 'price'])
  const sortDirection = castUnion(sort[1], ['asc', 'desc'])

  return {
    limit: searchParams.get('limit') ? Number(searchParams.get('limit')) : undefined,
    sortBy,
    sortDirection,
    minPrice: searchParams.get('minPrice') ? Number(searchParams.get('minPrice')) : undefined,
    maxPrice: searchParams.get('maxPrice') ? Number(searchParams.get('maxPrice')) : undefined,
    keyword: searchParams.get('q') || undefined,
  } satisfies ProductListQueryDTO
}
