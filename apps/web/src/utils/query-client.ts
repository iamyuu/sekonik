import { MutationCache, QueryClient } from '@tanstack/react-query'
import { TRPCClientError } from '@trpc/client'

const MAX_RETRY = 5

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Throw error if query fails, so we can catch it with ErrorBoundary
      throwOnError: true,
      // We don't want to refetch queries on window focus for this app
      refetchOnWindowFocus: false,
      // To make UX better, we'll refetch queries after user reconnected to the network
      refetchOnReconnect: true,
      // Give delay between retries, to make it less aggressive
      // 2s, 4s, 8s, 16s, 30s
      retryDelay: retryCount => Math.min(1_000 * 2 ** retryCount, 30_000),
      // Retries if the condition is true
      retry: (failureCount, error) => {
        if (error instanceof TRPCClientError) {
          // Skip retry if the error is 401, 403, 404
          return error.shape?.code !== 'UNAUTHORIZED' || error.shape?.code !== 'FORBIDDEN' || error.shape?.code !== 'NOT_FOUND'
        }

        // Retries when the failure count is less than the maximum retry count
        return failureCount <= MAX_RETRY
      },
    },
  },

  mutationCache: new MutationCache({
    onSuccess: (_data, _variables, _context, mutation) => {
      // Automatically invalidate the query cache based on the mutation key
      if (mutation.options.mutationKey) {
        queryClient.invalidateQueries({
          queryKey: mutation.options.mutationKey,
        })
      }
    },
  }),
})
