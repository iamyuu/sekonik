import type { IAuthForm } from '../store/auth'
import { useSelector } from '@xstate/store/react'
import { lazy, Suspense } from 'react'
import { PendingFallback } from '@/components/fallback/pending-fallback'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { authClient } from '../service/auth-client'
import { authStore } from '../store/auth'
import { SignInForm } from './sign-in-form'

const titleMap: Record<IAuthForm, string> = {
  'sign-in': 'Welcome Back',
  'sign-up': 'Create Account',
}

const SignUpForm = lazy(() => import('./sign-up-form').then(module => ({ default: module.SignUpForm })))

const forms: Record<IAuthForm, React.ReactNode> = {
  'sign-in': <SignInForm />,
  'sign-up': <SignUpForm />,
}

export function AuthForm() {
  const { isPending } = authClient.useSession()
  const opennedForm = useSelector(authStore, state => state.context.opennedForm)

  const handleOpenChange = (isOpen: boolean) => {
    if (!isOpen) {
      authStore.trigger.closeForm()
    }
  }

  if (!opennedForm) {
    return null
  }

  return (
    <Dialog open={opennedForm !== null} onOpenChange={handleOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{titleMap[opennedForm]}</DialogTitle>
        </DialogHeader>
        <div className="pt-6">
          {isPending
            ? <PendingFallback className="h-64" />
            : (
                <Suspense fallback={<PendingFallback className="h-64" />}>
                  {forms[opennedForm]}
                </Suspense>
              )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
