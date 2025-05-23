import type { PrismaClient } from '@/database/generated/client'
import type { Logger } from '@/utils/logger'
import { inject, injectable } from 'tsyringe'

@injectable()
export class ProductCategoryRepository {
  constructor(
    @inject('Logger') private readonly logger: Logger,
    @inject('Prisma') private readonly prisma: PrismaClient,
  ) {}

  async findMany() {
    this.logger.info(`[ProductCategoryRepository] Retrieving list of products`)

    const start = performance.now()

    // Using transaction to get products and count in one round trip to the database
    const result = await this.prisma.category.findMany({
      select: {
        slug: true,
        name: true,
        imageUrl: true,
      },
    })

    this.logger.info(`[ProductCategoryRepository] Successfully retrieved list of products (${result.length} items) in ${(performance.now() - start).toFixed(2)}ms`)

    return {
      items: result,
      meta: {},
    }
  }
}
