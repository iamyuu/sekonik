import { ProductFilterPanel } from '@/features/product/components/product-filter-panel'
import { ProductFilterResult } from '@/features/product/components/product-filter-result'

// export function loader() {
//   // TODO: prefetch list of product with filter query params using `queryClient.ensureData`
// }

export default function ProductFilterPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-3">
          <ProductFilterPanel />
        </div>
        <div className="md:col-span-9">
          <ProductFilterResult />
        </div>
      </div>
    </div>
  )
}
