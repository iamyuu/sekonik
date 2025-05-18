import Loader from '@/components/loader';
import { ProductList } from '@/components/product-list';
import { Suspense } from 'react';
// import { trpc, queryClient } from '@/utils/trpc';

export function meta() {
  return [{ title: 'My App' }, { name: 'description', content: 'My App' }];
}

// export function loader() {
//   return queryClient.ensureQueryData(trpc.product.getProducts.queryOptions());
// }

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-2">
      <Suspense fallback={<Loader />}>
        <ProductList />
      </Suspense>
    </div>
  );
}
