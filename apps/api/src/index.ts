/* eslint-disable perfectionist/sort-imports -- we want reflect-metadata to be imported first */
/* eslint-disable node/prefer-global/process -- expected to call `process` object */

import 'reflect-metadata'
import { handle } from 'hono/vercel'
import { createHttpServer } from '@/presentation/http'
import { logger } from '@/utils/logger'

const server = createHttpServer()

async function shutdown(kind: string) {
  logger.warn(`${kind} signal received`, new Date().toISOString())

  logger.warn('HTTP server closing...')
  server.close()
  logger.warn('HTTP server closed')

  logger.info('Exiting...')
  process.exit(0)
}

process.on('SIGHUP', shutdown)
process.on('SIGINT', shutdown)
process.on('SIGTERM', shutdown)

export const GET = handle(server.app)
export const POST = handle(server.app)
