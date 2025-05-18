import { QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from '@/components/ui/sonner'
import { queryClient } from '@/utils/query-client'

export function AppProviders(props: React.PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
      <Toaster />
    </QueryClientProvider>
  )
}
