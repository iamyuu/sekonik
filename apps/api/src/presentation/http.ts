import { cors } from 'hono/cors'
import { logger as httpLogger } from 'hono/logger'
import { secureHeaders } from 'hono/secure-headers'
import { env } from '@/config/env'
import { prisma } from '@/database/client'
import { authRoute } from '@/features/auth/auth.route'
import { productRouter } from '@/features/product/product.procedure'
import { logger } from '@/utils/logger'
import { createRouter } from '@/utils/router'
import { genRequestId } from '@/utils/string'
import { createTrpcServer, defineRouter } from '@/utils/trpc'

const trpcRouter = defineRouter({
  product: productRouter,
})

export function createHttpServer() {
  const app = createRouter()

  app.use(httpLogger())
  app.use(secureHeaders())

  app.use(
    '/api/*',
    cors({
      origin: env.WEB_URL,
      allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      allowHeaders: ['Content-Type', 'Authorization', 'X-Request-Id'],
      credentials: true,
    }),
  )

  app.use((c, next) => {
    const requestId = genRequestId()
    c.set('logger', logger.child({ requestId }))
    c.set('requestId', requestId)
    return next()
  })

  app.get('/api/health', async (c) => {
    const isHealthy = {
      message: 'OK',
      version: '0.1.0',
      // eslint-disable-next-line node/prefer-global/process -- expected to call `process.uptime`
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
    }

    try {
      await prisma.$queryRaw`SELECT 1`
      return c.json({ ...isHealthy, db: 'OK' })
    }
    catch {
      return c.json({ ...isHealthy, message: 'NOK', db: 'NOK' }, 500)
    }
  })

  app.route('/', authRoute)
  app.route('/', createTrpcServer({ router: trpcRouter }))
  app.notFound(c => c.json({ message: 'Not Found' }, 404))

  const server = Bun.serve({
    fetch: app.fetch,
    hostname: env.APP_HOST,
    port: env.APP_PORT,
  })

  logger.info(`🚀 Server running at http://${server.hostname}:${server.port}`)

  return {
    app,
    close: () => server.stop(),
  }
}

export type TRPCRouter = typeof trpcRouter
