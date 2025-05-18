import type { Route } from './+types/root'
import { Suspense } from 'react'
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router'
import { ErrorFallback } from '@/components/fallback/error-fallback'
import { PendingFallback } from '@/components/fallback/pending-fallback'
import { AppProviders } from '@/providers/app-provider'
import './styles/global.css'

export const meta: Route.MetaFunction = () => {
  return [
    { title: 'Sekonik' },
    { name: 'description', content: 'A web app to buy and sell preloved electronic' },
  ]
}

export const links: Route.LinksFunction = () => [
  {
    rel: 'preconnect',
    href: 'https://fonts.googleapis.com',
  },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },
]

export function Layout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return (
    <AppProviders>
      <div className="grid h-svh grid-rows-[auto_1fr]">
        <Suspense fallback={<PendingFallback />}>
          <Outlet />
        </Suspense>
      </div>
    </AppProviders>
  )
}

export { ErrorFallback as ErrorBoundary }
