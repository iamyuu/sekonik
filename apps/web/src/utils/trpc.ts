import type { TRPCRouter } from '../../../api/src/presentation/http'
import { createTRPCClient, httpBatchLink } from '@trpc/client'
import { createTRPCOptionsProxy } from '@trpc/tanstack-react-query'
import { env } from '@/config/env'
import { queryClient } from '@/utils/query-client'

export const trpcClient = createTRPCClient<TRPCRouter>({
  links: [
    httpBatchLink({
      url: `${env.VITE_API_URL}/trpc`,
      fetch(url, options) {
        return fetch(url, {
          ...options,
          credentials: 'include',
        })
      },
    }),
  ],
})

export const trpc = createTRPCOptionsProxy<TRPCRouter>({
  client: trpcClient,
  queryClient,
})

export type { TRPCRouter }
