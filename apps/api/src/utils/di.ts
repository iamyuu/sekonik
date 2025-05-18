/**
 * Dependency injection
 */

import { container } from 'tsyringe'
import { prisma } from '@/database/client'
import { logger } from '@/utils/logger'

container.register('Logger', { useValue: logger })
container.register('Prisma', { useValue: prisma })

export { container }
