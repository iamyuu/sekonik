import { QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'
import { Toaster } from '@/components/ui/sonner'
import { queryClient } from '@/utils/query-client'

export function AppProviders(props: React.PropsWithChildren) {
  const [scopedQueryClient] = useState(() => queryClient)

  return (
    <QueryClientProvider client={scopedQueryClient}>
      {props.children}
      <Toaster />
    </QueryClientProvider>
  )
}
