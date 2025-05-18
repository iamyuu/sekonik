import type { Logger } from '@/utils/logger'
import { createFactory } from 'hono/factory'

export interface AppEnv {
  Variables: {
    requestId: string
    logger: Logger
  }
}

/**
 * Ensure the rest of code is type-safe
 */
const { createApp, createMiddleware } = createFactory<AppEnv>()

export { createMiddleware, createApp as createRouter }
