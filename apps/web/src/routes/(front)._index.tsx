import { dehydrate, QueryClient } from '@tanstack/react-query'
import { lazy, Suspense } from 'react'
import { FrontBanner } from '@/components/layouts/front/front-banner'
import { ProductFeatured, ProductFeaturedSkeleton } from '@/features/product/components/featured'
import { ProductCategory, ProductCategorySkeleton } from '@/features/product/components/list-category'
import { prefetchCategories } from '@/features/product/services/category'
import { prefetchFeaturedProducts } from '@/features/product/services/product'

// User won't see it in the initial render
const FrontFeatures = lazy(() => import('@/components/layouts/front/front-features').then(module => ({ default: module.FrontFeatures })))

export async function loader() {
  const queryClient = new QueryClient()

  prefetchCategories(queryClient)
  prefetchFeaturedProducts(queryClient)

  return {
    dehydratedState: dehydrate(queryClient),
  }
}

export default function HomePage() {
  return (
    <>
      <FrontBanner />

      <Suspense fallback={<ProductCategorySkeleton />}>
        <ProductCategory />
      </Suspense>

      <Suspense fallback={<ProductFeaturedSkeleton />}>
        <ProductFeatured />
      </Suspense>

      <Suspense fallback={null}>
        <FrontFeatures />
      </Suspense>
    </>
  )
}
