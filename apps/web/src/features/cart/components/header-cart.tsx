import { ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCart } from '../hooks/use-cart'

export function HeaderCart() {
  const { count: cartCount, openCart } = useCart()

  return (
    <Button variant="ghost" className="relative cursor-pointer" onClick={openCart}>
      <ShoppingCart className="h-5 w-5" />
      {cartCount > 0
        ? (
            <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 bg-primary text-white rounded-full text-xs">
              {cartCount}
            </span>
          )
        : null}
    </Button>
  )
}
