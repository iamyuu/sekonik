import type { ProductDTO } from '../services/product'
import { Link, useSearchParams } from 'react-router'
import { formatCurrency } from '@/utils/formatter'
import { castUnion } from '@/utils/string'
import { useProducts } from '../services/product'

function ProductCard(product: ProductDTO) {
  return (
    <Link to={`/product/${product.slug}`}>
      <div className="flex flex-col gap-2 p-4 border rounded">
        <img
          src={product.imageUrl || ''}
          alt={product.name}
          className="w-full h-48 object-cover"
        />

        <span className="font-semibold">
          {product.name}
        </span>

        <span className="text-sm text-gray-500">
          {formatCurrency(Number(product.price))}
        </span>
      </div>
    </Link>
  )
}

export function ProductList() {
  const [searchParams] = useSearchParams()
  const products = useProducts(parseSearchParams(searchParams))

  const items = products.data.pages.flatMap(page => page.items)

  return (
    <div className="grid grid-auto-fit-[250px] gap-4">
      {items.map(product => <ProductCard key={product.id} {...product} />)}
    </div>
  )
}

function parseSearchParams(searchParams: URLSearchParams) {
  const sort = searchParams.get('sort')?.split('-') || []

  const sortBy = castUnion(sort[0], ['createdAt', 'price'])
  const sortDirection = castUnion(sort[1], ['asc', 'desc'])

  return {
    limit: Number(searchParams.get('limit')),
    sortBy,
    sortDirection,
    minPrice: Number(searchParams.get('minPrice')),
    maxPrice: Number(searchParams.get('maxPrice')),
    keyword: searchParams.get('q'),
  }
}
