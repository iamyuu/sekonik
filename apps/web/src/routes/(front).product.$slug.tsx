import type { Info } from './+types/(front).product.$slug'
import { useParams } from 'react-router'
import { ProductDetail } from '@/features/product/components/product-detail'

// export function loader() {
//   // TODO: prefetch detail product using `queryClient.ensureData`
// }

export default function ProductDetailPage() {
  const { slug } = useParams<Info['params']>()

  if (!slug) {
    throw new Error('Product not found')
  }

  return <ProductDetail slug={slug} />
}
