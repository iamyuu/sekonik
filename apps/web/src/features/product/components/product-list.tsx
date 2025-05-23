import type { ProductListDTO } from '../services/product'
import { ProductCard } from './product-card'

interface ProductListProps {
  products: ProductListDTO
}

export function ProductList({ products }: ProductListProps) {
  if (products.length === 0) {
    return (
      <div className="py-8 text-center">
        <p>No products found.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-auto-fill-[250px] gap-6">
      {products.map(product => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  )
}
