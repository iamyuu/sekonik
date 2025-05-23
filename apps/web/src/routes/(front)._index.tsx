import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router'
import { Button } from '@/components/ui/button'
import { Image } from '@/components/ui/image'
import { APP_FEATURES } from '@/config/app'
import { ProductCategory } from '@/features/product/components/product-category'
import { ProductFeatured } from '@/features/product/components/product-featured'

// export function loader() {
//   // TODO: prefetch category & featured product using `queryClient.ensureData`
// }

function FrontBanner() {
  return (
    <div className="bg-white">
      <div className="container mx-auto py-16 px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Modern Electronics for Every Need
            </h1>
            <p className="text-lg mb-6 max-w-lg">
              A sleek and user-friendly e-commerce platform specialized in
              selling electronics, designed to deliver a seamless shopping experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="w-full md:w-auto">
                <Link to="/product">
                  Shop Now
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/placeholder.svg"
              alt="showcase"
              className="w-96 h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function FrontFeatures() {
  return (
    <section className="bg-muted py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-8 text-center">Why Choose Our Preloved Electronics</h2>
        <div className="grid grid-auto-fit-[250px] gap-6">
          {APP_FEATURES.map(feature => (
            <div key={feature.title} className="bg-card rounded-lg p-6">
              <div className="mb-4 text-primary">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-card-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <>
      <FrontBanner />
      <ProductCategory />
      <ProductFeatured />
      <FrontFeatures />
    </>
  )
}
