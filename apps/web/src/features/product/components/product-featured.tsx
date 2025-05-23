import { Link } from 'react-router'
import { Button } from '@/components/ui/button'
import { useFeaturedProducts } from '../services/product'
import { ProductList } from './product-list'

export function ProductFeatured() {
  const { data: products } = useFeaturedProducts()
  const featuredProducts = products?.items ?? []

  // Hide if there are no featured products
  if (featuredProducts.length === 0) {
    return null
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Featured Products</h2>
        <Button asChild variant="link" className="text-sm text-foreground">
          <Link to="/product">View All</Link>
        </Button>
      </div>

      <ProductList products={featuredProducts} />
    </div>
  )
}
