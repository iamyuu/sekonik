import { Link } from 'react-router'
import { APP_ADDRESS, APP_DESCRIPTION, APP_EMAIL, APP_NAME, APP_PHONE } from '@/config/app'

export function FrontFooter() {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand and Description */}
          <div>
            <Link to="/" className="flex items-center">
              <h2 className="text-2xl font-bold">{APP_NAME}</h2>
            </Link>
            <p className="mt-4 text-sm">
              {APP_DESCRIPTION}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold uppercase tracking-wide mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:underline">Home</Link></li>
              <li><Link to="/product" className="text-sm hover:underline">All Products</Link></li>
              <li><Link to="/categories" className="text-sm hover:underline">Categories</Link></li>
              <li><Link to="/about" className="text-sm hover:underline">About Us</Link></li>
              <li><Link to="/contact" className="text-sm hover:underline">Contact Us</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-bold uppercase tracking-wide mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-sm hover:underline">Shopping Guide</Link></li>
              <li><Link to="#" className="text-sm hover:underline">Delivery Information</Link></li>
              <li><Link to="#" className="text-sm hover:underline">Returns & Exchanges</Link></li>
              <li><Link to="#" className="text-sm hover:underline">FAQ</Link></li>
              <li><Link to="#" className="text-sm hover:underline">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold uppercase tracking-wide mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm">
                <a href={`mailto:${APP_EMAIL}`} className="hover:underline">{APP_EMAIL}</a>
              </li>
              <li className="text-sm">
                <a href={`tel:${APP_PHONE}`} className="hover:underline">{APP_PHONE}</a>
              </li>
              <li className="text-sm">
                {APP_ADDRESS}
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-gray-200 text-center text-sm">
          <p>
            &copy;
            {new Date().getFullYear()}
            {' '}
            {APP_NAME}
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
