import { Menu, Search, ShoppingCart, X } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { APP_NAME } from '@/config/app'
import { useCart } from '@/features/cart'

export function HeaderNavigation() {
  const { count: cartCount, openCart } = useCart()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container py-4 px-4 mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">{APP_NAME}</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:gap-6">
            <Link to="/" className="font-medium hover:text-primary">Home</Link>
            <Link to="/product" className="font-medium hover:text-primary">Products</Link>
            <Link to="/categories" className="font-medium hover:text-primary">Categories</Link>
            <Link to="/about" className="font-medium hover:text-primary">About</Link>
            <Link to="/contact" className="font-medium hover:text-primary">Contact</Link>
          </nav>

          {/* Desktop Search and Cart */}
          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search products..."
                className="w-64 pl-9"
              />
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            </div>
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
          </div>

          {/* Mobile Icons */}
          <div className="flex md:hidden items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-1"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="relative p-1" onClick={openCart}>
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0
                ? (
                    <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 bg-primary text-white rounded-full text-xs">
                      {cartCount}
                    </span>
                  )
                : null}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-1"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen
          ? (
              <div className="pt-3 md:hidden">
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-full"
                />
              </div>
            )
          : null}

        {/* Mobile Navigation Menu */}
        {isMenuOpen
          ? (
              <nav className="py-3 md:hidden flex flex-col gap-2 animate-fade-in border-t mt-2">
                <Link to="/" className="p-2 hover:bg-gray-100 rounded-md font-medium">Home</Link>
                <Link to="/product" className="p-2 hover:bg-gray-100 rounded-md font-medium">Products</Link>
                <Link to="/categories" className="p-2 hover:bg-gray-100 rounded-md font-medium">Categories</Link>
                <Link to="/about" className="p-2 hover:bg-gray-100 rounded-md font-medium">About</Link>
                <Link to="/contact" className="p-2 hover:bg-gray-100 rounded-md font-medium">Contact</Link>
              </nav>
            )
          : null}
      </div>
    </header>
  )
}
