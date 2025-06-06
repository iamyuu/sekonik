import type { Route } from './+types/root'
import { HydrationBoundary } from '@tanstack/react-query'
import { Suspense } from 'react'
import { Links, Meta, Outlet, Scripts, ScrollRestoration, useLocation, useMatches } from 'react-router'
import { ErrorFallbackScreen } from '@/components/fallback/error-fallback'
import { PendingFallback } from '@/components/fallback/pending-fallback'
import { APP_DESCRIPTION, APP_NAME } from '@/config/app'
import { AppProviders } from '@/providers/app-provider'
import './styles/global.css'

export const meta: Route.MetaFunction = () => {
  return [
    { title: APP_NAME },
    { name: 'description', content: APP_DESCRIPTION },
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
  {
    rel: 'preload',
    as: 'image',
    href: '/placeholder.svg',
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
  const dehydratedState = useDehydratedState()

  return (
    <AppProviders>
      <Suspense fallback={<PendingFallback className="pt-8" />}>
        <HydrationBoundary state={dehydratedState}>
          <Outlet />
        </HydrationBoundary>
      </Suspense>
    </AppProviders>
  )
}

export function ErrorBoundary(props: Route.ErrorBoundaryProps) {
  return <ErrorFallbackScreen {...props} />
}

export function useDehydratedState() {
  const matches = useMatches()
  const location = useLocation()
  const loaderData = matches.find(match => match.pathname === location.pathname)?.data

  return (loaderData as any)?.dehydratedState
}
