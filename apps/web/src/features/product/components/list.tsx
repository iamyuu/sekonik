import type { ProductListDTO } from '../services/product'
import { ProductCard, ProductCardSkeleton } from './card-item'

interface ProductListProps {
  products: ProductListDTO
}

export function ProductList(props: ProductListProps) {
  if (props.products.length === 0) {
    return (
      <div className="py-8 text-center">
        <p>No products found.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-auto-fill-[250px] gap-6">
      {props.products.map(product => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  )
}

interface ProductListSkeletonProps {
  size: number
}

export function ProductListSkeleton(props: ProductListSkeletonProps) {
  return (
    <div className="grid grid-auto-fill-[250px] gap-6">
      {Array.from({ length: props.size }).map((_, index) => (
        <ProductCardSkeleton
          // eslint-disable-next-line react/no-array-index-key -- safe on this case
          key={index}
        />
      ))}
    </div>
  )
}
