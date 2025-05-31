import { Minus, Plus, ShoppingCart } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router'
import { Button } from '@/components/ui/button'
import { Image } from '@/components/ui/image'
import { Input } from '@/components/ui/input'
import { formatCurrency } from '@/utils/formatter'
import { cn } from '@/utils/functions'
import { useProductBySlug } from '../services/product'
import { formatDimensions } from '../utils/formatter'
import { calculateDiscountedPrice } from '../utils/price'

interface ProductDetailProps {
  slug: string
}

export function ProductDetail(props: ProductDetailProps) {
  const { data: product } = useProductBySlug(props.slug)
  const [quantity, setQuantity] = useState(product?.minimumOrderQuantity || 1)

  const handleUpdateQuantity = (kind: 'increase' | 'decrease' | 'set', newQuantity?: number) => {
    // Instead of force max and min value,
    // TODO: it could be better if we disable the button
    // (and show tooltip with the reason) when it reach the limit

    const min = product?.minimumOrderQuantity || 1
    const max = product?.stockQuantity || 0

    if (kind === 'increase') {
      setQuantity(prev => Math.min(max, prev + 1))
    }

    if (kind === 'decrease') {
      setQuantity(prev => Math.max(min, prev - 1))
    }

    if (kind === 'set' && newQuantity) {
      setQuantity(Math.max(min, Math.min(max, newQuantity)))
    }
  }

  if (!product) {
    return (
      <div className="container mx-auto py-16 px-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <p className="mb-6">Sorry, we couldn't find the product you're looking for.</p>
        <Button asChild>
          <Link to="/product">Back to list products</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8 px-4">
      {/* Product details */}
      <div className="grid grid-cols-12 gap-8 mb-12">
        {/* Product Images */}
        <ProductImages slug={props.slug} />

        {/* Product Info */}
        <div className="col-span-12 lg:col-span-7">
          <h1 className="text-xl font-bold mb-2">{product.name}</h1>

          <div className="mb-4">
            {product.discountPercentage
              ? (
                  <div className="flex flex-col gap-2">
                    <span className="text-3xl font-bold">
                      {formatCurrency(calculateDiscountedPrice(product.price, product.discountPercentage))}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-sm">
                        {Math.round(Number(product.discountPercentage))}
                        %
                      </span>
                      <span className="text-gray-500 line-through">
                        {formatCurrency(product.price)}
                      </span>
                    </div>
                  </div>
                )
              : (
                  <span className="text-3xl font-bold">
                    {formatCurrency(product.price)}
                  </span>
                )}
          </div>

          <p className="text-gray-600 mb-6">
            {product.description}
          </p>

          <div className="space-y-2 mb-6">
            <div className="flex items-center gap-1">
              <span className="font-medium text-sm">Category:</span>
              <Link to={`/product?category=${product.category.slug}`} className="hover:underline" prefetch="intent">
                {product.category.name}
              </Link>
            </div>

            {product.brand
              ? (
                  <div className="flex items-center gap-1">
                    <span className="font-medium text-sm">Brand:</span>
                    <Link to={`/product?brand=${product.brand.slug}`} className="hover:underline" prefetch="intent">
                      {product.brand.name}
                    </Link>
                  </div>
                )
              : null}

            <div className="flex items-center gap-1">
              <span className="font-medium text-sm">Weight:</span>
              <span>
                {product.weight}
                kg
              </span>
            </div>

            <div className="flex items-center gap-1">
              <span className="font-medium text-sm">Size:</span>
              {/* @ts-expect-error -- dimensions is not typed correctly */}
              <span>{formatDimensions(product.dimensions)}</span>
            </div>

            <div className="flex items-center gap-1">
              <span className="font-medium text-sm">Availability:</span>
              <span className={product.stockQuantity > 0 ? 'text-green-600' : 'text-red-600'}>
                {product.stockQuantity > 0 ? `In Stock (${product.stockQuantity} available)` : 'Out of Stock'}
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center">
              <span className="w-24 font-medium">Quantity:</span>
              <div className="flex items-center border rounded-md">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleUpdateQuantity('decrease')}
                  disabled={quantity <= product.minimumOrderQuantity}
                  className="h-10 w-10 rounded-none"
                >
                  <Minus className="h-4 w-4" />
                </Button>

                <Input
                  type="text"
                  inputMode="numeric"
                  value={quantity}
                  onChange={e => handleUpdateQuantity('set', Number(e.target.value))}
                  className="w-16 text-center shadow-none border-none focus-visible:border-none focus-visible:ring-0 focus-visible:ring-transparent outline-none focus-visible:outline-none"
                />

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleUpdateQuantity('increase')}
                  disabled={quantity >= product.stockQuantity}
                  className="h-10 w-10 rounded-none"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-2">
              <Button
                variant="outline"
                className="w-full md:w-64 border-primary text-primary hover:text-primary"
                disabled={product.stockQuantity <= 0}
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
              <Button
                variant="default"
                className="w-full md:w-64"
                disabled={product.stockQuantity <= 0}
              >
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProductImages(props: ProductDetailProps) {
  const [activeImage, setActiveImage] = useState(0)
  const { data: product } = useProductBySlug(props.slug)

  if (!product) {
    return null
  }

  return (
    <div className="col-span-12 lg:col-span-5 space-y-4">
      <div className="bg-white border rounded-lg overflow-hidden aspect-square">
        <Image
          src={product.images[activeImage].url}
          alt={product.name}
          className="w-full h-full object-contain p-4"
        />
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
        {product.images.map((image, index) => (
          <button
            key={image.id}
            type="button"
            className={cn(
              'rounded-md overflow-hidden w-18 h-18 flex-shrink-0',
              index === activeImage ? 'border-2 border-primary' : '',
            )}
            onClick={() => setActiveImage(index)}
          >
            <Image
              src={image.url}
              alt={`${product.name} - view ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
