import type { PrismaClient } from '@/database/generated/client'
import type { Logger } from '@/utils/logger'
import { inject, injectable } from 'tsyringe'

@injectable()
export class ProductRepository {
  constructor(
    @inject('Logger') private readonly logger: Logger,
    @inject('Prisma') private readonly prisma: PrismaClient,
  ) {}

  async findMany() {
    this.logger.info('[ProductRepository] Retrieving list of products')

    const result = await this.prisma.product.findMany({
      select: {
        id: true,
        slug: true,
        name: true,
        price: true,
        imageUrl: true,
        stockQuantity: true,
        minimumOrderQuantity: true,
      },
    })

    this.logger.info('[ProductRepository] Successfully retrieved list of products')

    return {
      items: result,
    }
  }
}
