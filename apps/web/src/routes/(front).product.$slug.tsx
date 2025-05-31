import type { Route } from './+types/(front).product.$slug'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import { useParams } from 'react-router'
import { ProductDetail } from '@/features/product/components/detail'
import { prefetchProductBySlug } from '@/features/product/services/product'

export const meta: Route.MetaFunction = ({ data }) => {
  return [
    { title: data?.seo.title },
    { description: data?.seo.description },
    // { name: 'keywords', content: data?.seo.keywords },
    // { name: 'author', content: data?.seo.author },
    { name: 'og:title', content: data?.seo.title },
    { name: 'og:description', content: data?.seo.description },
    { name: 'og:type', content: 'website' },
    // { name: 'og:url', content: data?.seo.url },
    // { name: 'og:image', content: data?.seo.image },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: data?.seo.title },
    { name: 'twitter:description', content: data?.seo.description },
    // { name: 'twitter:image', content: data?.seo.image },
  ]
}

export async function loader({ params }: Route.LoaderArgs) {
  if (!params.slug) {
    throw new Error('Product not found')
  }

  const queryClient = new QueryClient()

  const product = await prefetchProductBySlug(queryClient, params.slug)

  return {
    dehydratedState: dehydrate(queryClient),
    seo: {
      title: product?.name,
      description: product?.description,
    },
  }
}

export default function ProductDetailPage() {
  const { slug } = useParams<Route.LoaderArgs['params']>()

  if (!slug) {
    throw new Error('Product not found')
  }

  return <ProductDetail slug={slug} />
}
