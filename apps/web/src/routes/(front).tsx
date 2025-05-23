import { Outlet } from 'react-router'
import { ErrorFallback } from '@/components/fallback/error-fallback'
import { FrontLayout } from '@/components/layouts/front'

export default function FrontLayoutRoute() {
  return (
    <FrontLayout>
      <Outlet />
    </FrontLayout>
  )
}

export { ErrorFallback as ErrorBoundary }
