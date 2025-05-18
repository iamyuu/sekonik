import { Card } from '@/components/ui/card';
import { type AppRouter, trpc } from '@/utils/trpc';
import { useSuspenseQuery } from '@tanstack/react-query';

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
};

function ProductCard(props: { product: Awaited<ReturnType<AppRouter['product']['getProducts']>>['items'][number] }) {
  return (
    <Card className="p-4">
      <img src={props.product.imageUrl} alt={props.product.name} />
      <h3>{props.product.name}</h3>
      <p>{formatCurrency(Number(props.product.price))}</p>
      <p>{props.product.stockQuantity}</p>
      <p>{props.product.minimumOrderQuantity}</p>
    </Card>
  );
}

export function ProductList() {
  const products = useSuspenseQuery(trpc.product.getProducts.queryOptions());

  return (
    <div className="space-y-4">
      <h2>Product List</h2>
      {products.data.items.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}
