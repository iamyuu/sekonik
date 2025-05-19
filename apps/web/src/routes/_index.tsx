import { ProductFilter } from '@/features/product/components/product-filter'
import { ProductList } from '@/features/product/components/product-list'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-2 grid grid-cols-12 gap-4">
      <ProductFilter />

      <main className="col-span-12 lg:col-span-9">
        <ProductList />
      </main>
    </div>
  )
}
