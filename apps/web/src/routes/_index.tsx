import { ProductList } from '@/features/product/components/product-list'
// import { prefetchProducts } from '@/features/product/services/product'

// FIXME: Setup have a same instance of queryClient in server and client
// export async function loader() {
//   // prefetching the query data in server-side, but use the cache if available
//   await prefetchProducts()
// }

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-2">
      <ProductList />
    </div>
  )
}
