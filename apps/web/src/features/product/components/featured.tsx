import { Link } from 'react-router'
import { EmptyState } from '@/components/fallback/empty-state'
import { ErrorFallback } from '@/components/fallback/error-fallback'
import { Button } from '@/components/ui/button'
import { useFeaturedProducts } from '../services/product'
import { ProductList, ProductListSkeleton } from './list'

export function ProductFeatured() {
  const query = useFeaturedProducts()
  const featuredProducts = query.data?.items ?? []

  if (query.error) {
    return (
      <ErrorFallback
        title="Error"
        description="Sorry, we couldn't load the featured products."
        onRetry={() => query.refetch()}
      />
    )
  }

  if (featuredProducts.length === 0) {
    return (
      <EmptyState
        title="No Featured Products"
        description="There are no featured products available."
      />
    )
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Featured Products</h2>
        <Button asChild variant="link" className="text-sm text-foreground">
          <Link to="/product">View All Product</Link>
        </Button>
      </div>

      <ProductList products={featuredProducts} />
    </div>
  )
}

export function ProductFeaturedSkeleton() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Featured Products</h2>
        <Button asChild variant="link" className="text-sm text-foreground">
          <Link to="/product">View All Product</Link>
        </Button>
      </div>

      <ProductListSkeleton size={8} />
    </div>
  )
}
