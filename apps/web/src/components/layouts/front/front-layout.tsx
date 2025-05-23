import { lazy, Suspense } from 'react'
import { PendingFallback } from '@/components/fallback/pending-fallback'
import { FrontFooter } from './front-footer'
import { HeaderNavigation } from './header-navigation'

// User won't see the auth form until tyring to open cart
const AuthForm = lazy(() => import('@/features/auth').then(module => ({ default: module.AuthForm })))

// In another case, we can also lazy load the footer
// because user won't see it, until they reach the bottom of the page
// const FrontFooter = lazy(() => import('./front-footer').then(module => ({ default: module.FrontFooter })))

export function FrontLayout(props: React.PropsWithChildren) {
  return (
    <div className="grid h-svh grid-rows-[auto_1fr]">
      <HeaderNavigation />

      <main>
        <Suspense fallback={<PendingFallback className="pt-8" />}>
          {props.children}
          <AuthForm />
        </Suspense>
      </main>

      <FrontFooter />
    </div>
  )
}
