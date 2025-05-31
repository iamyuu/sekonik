import { useSearchParams } from 'react-router'
import { SimplePagination } from '@/components/ui/pagination'
import { useProducts } from '../services/product'
import { parseSearchParams } from '../utils/parser'
import { ProductList, ProductListSkeleton } from './list'

export function ProductFilterResult() {
  const [searchParams, setSearchParams] = useSearchParams()
  const parsedSearchParams = parseSearchParams(searchParams)

  const query = useProducts(parsedSearchParams)
  const items = query.data?.items ?? []

  const handleChangePagination = (kind: 'next' | 'prev') => {
    const currentPage = Number(searchParams.get('page') || 1)

    if (kind === 'next') {
      searchParams.set('page', (currentPage + 1).toString())
    }

    if (kind === 'prev') {
      searchParams.set('page', (currentPage - 1).toString())
    }

    setSearchParams(searchParams)
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        {`Showing ${query.data?.meta.showing ?? 0} of ${query.data?.meta.total ?? 0} products${parsedSearchParams.keyword ? ` for "${parsedSearchParams.keyword}"` : ''}`}
      </p>

      <div className="grid grid-auto-fit-[250px] gap-4">
        <ProductList products={items} />
      </div>

      {items.length > 0
        ? (
            <SimplePagination
              hasNext={query.data?.meta.hasNext}
              hasPrev={query.data?.meta.hasPrev}
              onNext={() => handleChangePagination('next')}
              onPrev={() => handleChangePagination('prev')}
            />
          )
        : null}
    </div>
  )
}

export function ProductFilterResultSkeleton() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        Showing - of - products
      </p>

      <div className="grid grid-auto-fit-[250px] gap-4">
        <ProductListSkeleton size={8} />
      </div>
    </div>
  )
}
