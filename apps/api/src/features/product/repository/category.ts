import type { ComboboxDTO } from '../schemas/combobox'
import type { Prisma, PrismaClient } from '@/database/generated/client'
import type { Logger } from '@/utils/logger'
import { inject, injectable } from 'tsyringe'

@injectable()
export class ProductCategoryRepository {
  constructor(
    @inject('Logger') private readonly logger: Logger,
    @inject('Prisma') private readonly prisma: PrismaClient,
  ) {}

  async findMany(input: ComboboxDTO) {
    this.logger.info(`[ProductCategoryRepository] Retrieving categories`)

    const start = performance.now()

    const where: Prisma.CategoryWhereInput = {}

    if (input.keyword) {
      where.name = {
        contains: input.keyword,
        mode: 'insensitive',
      }
    }

    const result = await this.prisma.category.findMany({
      select: {
        slug: true,
        name: true,
        imageUrl: true,
      },
      where,
    })

    this.logger.info(`[ProductCategoryRepository] Successfully retrieved categories (${result.length} items) in ${(performance.now() - start).toFixed(2)}ms`)

    return {
      items: result,
      meta: {},
    }
  }
}
