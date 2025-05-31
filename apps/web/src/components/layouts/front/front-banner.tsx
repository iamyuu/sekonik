import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router'
import { Button } from '@/components/ui/button'
import { Image } from '@/components/ui/image'

export function FrontBanner() {
  return (
    <div className="bg-white">
      <div className="container mx-auto py-16 px-4">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8">
          <div className="md:w-1/2">
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
