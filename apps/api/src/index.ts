/* eslint-disable node/prefer-global/process -- expected to call `process` object */
import { createHttpServer } from '@/presentation/http'
import { logger } from '@/utils/logger'
import 'reflect-metadata'

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
