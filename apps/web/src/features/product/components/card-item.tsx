import type { ProductListDTO } from '../services/product'
import { Link } from 'react-router'
import { Image } from '@/components/ui/image'
import { Skeleton } from '@/components/ui/skeleton'
import { formatCurrency } from '@/utils/formatter'
import { calculateDiscountedPrice } from '../utils/price'

interface ProductCardProps {
  product: ProductListDTO[number]
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group rounded-lg border bg-card text-card-foreground hover:shadow-sm transition-all flex flex-col h-full overflow-hidden">
      <Link to={`/product/${product.slug}`} className="block flex-grow" prefetch="intent">
        <div className="aspect-square overflow-hidden">
          <Image
            src={product.thumbnailUrl}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
          />
        </div>

        <div className="p-4 space-y-4">
          {/* Category */}
          <Link to={`/product?category=${product.category.slug}`} className="text-sm text-muted-foreground mb-2">
            {product.category.name}
          </Link>

          {/* Product Name */}
          <h3 className="font-semibold leading-none tracking-tight line-clamp-1">{product.name}</h3>

          {/* Price */}
          <div className="flex items-center gap-2">
            {product.discountPercentage
              ? (
                  <>
                    <span className="font-bold text-primary">
                      {formatCurrency(calculateDiscountedPrice(product.price, product.discountPercentage))}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      {formatCurrency(product.price)}
                    </span>
                  </>
                )
              : (
                  <span className="font-bold">
                    {formatCurrency(product.price)}
                  </span>
                )}
          </div>
        </div>
      </Link>
    </div>
  )
}

export function ProductCardSkeleton() {
  return (
    <div className="group rounded-lg border bg-card text-card-foreground hover:shadow-sm transition-all flex flex-col h-full overflow-hidden">
      <div className="aspect-square overflow-hidden">
        <Skeleton className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
      </div>

      <div className="p-4 space-y-4">
        {/* Category */}
        <Skeleton className="h-4 w-24" />

        {/* Product Name */}
        <Skeleton className="h-4 w-32" />

        {/* Price */}
        <Skeleton className="h-4 w-24" />
      </div>
    </div>
  )
}
