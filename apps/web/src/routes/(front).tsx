import { Outlet } from 'react-router'
import { FrontLayout } from '@/components/layouts/front'

export default function FrontLayoutRoute() {
  return (
    <FrontLayout>
      <Outlet />
    </FrontLayout>
  )
}
