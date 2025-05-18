import type { AnyRouter } from '@trpc/server'
import type { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch'
import type { Context as HonoContext } from 'hono'
import type { AppEnv } from '@/utils/router'
import { trpcServer } from '@hono/trpc-server'
import { initTRPC } from '@trpc/server'
import { auth } from '@/features/auth'
import { UnauthorizedError } from '@/utils/error'
import { createRouter } from '@/utils/router'

/**
 * Create a context for TRPC
 */
async function createContext(_option: FetchCreateContextFnOptions, c: HonoContext<AppEnv>) {
  const session = await auth.api.getSession({
    headers: c.req.raw.headers,
  })

  return {
    ...c.var,
    auth: session,
  }
}

const t = initTRPC.context<typeof createContext>().create()

/**
 * Instead of expose the instance,
 * we expose function to define a router and procedures
 */
export const defineRouter = t.router
export const publicProcedure = t.procedure
export const protectedProcedure = t.procedure.use(({ ctx, next }) => {
  if (ctx.auth === null) {
    throw new UnauthorizedError()
  }

  return next({
    ctx: {
      ...ctx,
      auth: ctx.auth,
    },
  })
})

/**
 * Create a TRPC server and bind it to the router
 */
export function createTrpcServer({ router }: { router: AnyRouter }) {
  return createRouter().use(
    '/api/trpc/*',
    trpcServer({
      router,
      endpoint: '/api/trpc',
      createContext,
    }),
  )
}
