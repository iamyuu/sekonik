import type { ProductDTO } from '../services/product'
import { Card } from '@/components/ui/card'
import { formatCurrency } from '@/utils/formatter'
import { useProducts } from '../services/product'

function ProductCard(props: { product: ProductDTO }) {
  return (
    <Card className="p-4">
      {props.product.imageUrl ? <img src={props.product.imageUrl} alt={props.product.name} /> : null}
      <h3>{props.product.name}</h3>
      <p>{formatCurrency(Number(props.product.price))}</p>
      <p>{props.product.stockQuantity}</p>
      <p>{props.product.minimumOrderQuantity}</p>
    </Card>
  )
}

export function ProductList() {
  const products = useProducts()

  return (
    <div className="space-y-4">
      <h2>Product List</h2>
      {products.data.items.map(product => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  )
}
