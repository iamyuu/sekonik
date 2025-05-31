import type { Route } from './+types/(front).product._index'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import { Suspense } from 'react'
import { ProductFilterPanel } from '@/features/product/components/filter-panel'
import { ProductFilterResult, ProductFilterResultSkeleton } from '@/features/product/components/filter-result'
import { prefetchProducts } from '@/features/product/services/product'
import { parseSearchParams } from '@/features/product/utils/parser'

export async function loader({ request }: Route.LoaderArgs) {
  const queryClient = new QueryClient()

  prefetchProducts(queryClient, parseSearchParams(new URL(request.url).searchParams))

  return {
    dehydratedState: dehydrate(queryClient),
  }
}

export default function ProductFilterPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-3">
          <ProductFilterPanel />
        </div>
        <div className="md:col-span-9">
          <Suspense fallback={<ProductFilterResultSkeleton />}>
            <ProductFilterResult />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
