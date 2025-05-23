import { Link } from 'react-router'
import { Image } from '@/components/ui/image'
import { useProductCategories } from '../services/product-category'

export function ProductCategory() {
  const { data: categories } = useProductCategories()

  return (
    <section className="bg-muted py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Shop by Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {categories.items.map(category => (
            <Link
              key={category.slug}
              to={`/product?category=${category.slug}`}
              className="flex flex-col items-center transition-transform hover:scale-105"
            >
              <div className="bg-card rounded-full w-24 h-24 flex items-center justify-center">
                <Image
                  src={category.imageUrl ?? ''}
                  alt={category.name}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <span className="mt-2 text-center">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
