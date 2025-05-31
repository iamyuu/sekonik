import type { Route } from '../../+types/root'
import { isRouteErrorResponse } from 'react-router'
import { FrontLayout } from '@/components/layouts/front'
import { Button } from '../ui/button'

interface ErrorFallbackProps {
  title: string
  description: string
  onRetry?: () => void
}

export function ErrorFallback(props: ErrorFallbackProps) {
  return (
    <div className="container mx-auto py-16 px-4 text-center space-y-2">
      <h1 className="text-2xl font-bold">{props.title}</h1>
      <p>{props.description}</p>

      {props.onRetry
        ? (
            <Button variant="outline" className="mt-4 cursor-pointer" onClick={props.onRetry}>
              Try again
            </Button>
          )
        : null}
    </div>
  )
}

export function ErrorFallbackScreen(props: Route.ErrorBoundaryProps) {
  let message = 'Oops!'
  let details = 'An unexpected error occurred.'
  let stack: string | undefined

  if (isRouteErrorResponse(props.error)) {
    message = props.error.status === 404 ? '404' : 'Error'
    details = props.error.status === 404 ? 'The requested page could not be found.' : props.error.statusText || details
  }

  // Show error message in development
  if (import.meta.env.DEV && props.error && props.error instanceof Error) {
    details = props.error.message
    stack = props.error.stack
  }

  return (
    <FrontLayout>
      <div className="container mx-auto p-4 pt-16">
        <h2 className="text-2xl font-bold">{message}</h2>
        <p>{details}</p>
        {stack && (
          <pre className="w-full overflow-x-auto p-4">
            <code>{stack}</code>
          </pre>
        )}
      </div>
    </FrontLayout>
  )
}
