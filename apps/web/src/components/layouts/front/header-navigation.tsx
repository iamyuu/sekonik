import { Link } from 'react-router'
import { APP_NAME } from '@/config/app'
import { AvatarUser as User } from '@/features/auth'
import { HeaderCart as Cart } from '@/features/cart'
import { SearchboxButton, SearchboxInput, SearchboxRoot } from './front-searchbox'

export function HeaderNavigation() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container py-4 px-4 mx-auto">
        <SearchboxRoot>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <h1 className="text-2xl font-bold text-primary">{APP_NAME}</h1>
            </Link>

            {/* Desktop Search */}
            <SearchboxInput />

            {/* Desktop Cart and User */}
            <div className="hidden md:flex items-center gap-4">
              <Cart />

              <User />
            </div>

            {/* Mobile Icons */}
            <div className="flex md:hidden items-center gap-2">
              <SearchboxButton />

              <Cart />

              <User />
            </div>
          </div>
        </SearchboxRoot>
      </div>
    </header>
  )
}
