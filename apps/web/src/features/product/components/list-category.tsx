import { Link } from 'react-router'
import { EmptyState } from '@/components/fallback/empty-state'
import { ErrorFallback } from '@/components/fallback/error-fallback'
import { Image } from '@/components/ui/image'
import { Skeleton } from '@/components/ui/skeleton'
import { useProductCategories } from '../services/category'

export function ProductCategory() {
  const query = useProductCategories()
  const categories = query.data?.items ?? []

  if (query.error) {
    return (
      <ErrorFallback
        title="Error"
        description="Sorry, we couldn't load the categories."
        onRetry={() => query.refetch()}
      />
    )
  }

  if (categories.length === 0) {
    return (
      <EmptyState
        title="No Categories"
        description="There are no categories available."
      />
    )
  }

  return (
    <section className="bg-muted py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Shop by Categories</h2>
        <div className="grid grid-auto-fill-[160px] gap-6">
          {categories.map(category => (
            <Link
              key={category.slug}
              to={`/product?category=${category.slug}`}
              className="flex flex-col items-center transition-transform hover:scale-105"
            >
              <div className="bg-card rounded-full w-26 h-26 flex items-center justify-center">
                <Image
                  src={category.imageUrl ?? ''}
                  alt={category.name}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <span className="mt-2 text-center line-clamp-2 font-medium">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ProductCategorySkeleton() {
  return (
    <section className="bg-muted py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Shop by Categories</h2>
        <div className="grid grid-auto-fill-[160px] gap-6">
          {Array.from({ length: 12 }).map((_, index) => (
            <div
              // eslint-disable-next-line react/no-array-index-key -- safe on this case
              key={index}
              className="flex flex-col items-center gap-2"
            >
              <Skeleton className="w-26 h-26 bg-card rounded-full" />
              <Skeleton className="w-26 h-4 bg-card" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
