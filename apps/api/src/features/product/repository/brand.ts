import type { ComboboxDTO } from '../schemas/combobox'
import type { Prisma, PrismaClient } from '@/database/generated/client'
import type { Logger } from '@/utils/logger'
import { inject, injectable } from 'tsyringe'

@injectable()
export class ProductBrandRepository {
  constructor(
    @inject('Logger') private readonly logger: Logger,
    @inject('Prisma') private readonly prisma: PrismaClient,
  ) {}

  async findMany(input: ComboboxDTO) {
    this.logger.info(`[ProductBrandRepository] Retrieving brands with keyword: ${input.keyword || ''}`)

    const start = performance.now()

    const where: Prisma.BrandWhereInput = {}

    if (input.keyword) {
      where.name = {
        contains: input.keyword,
        mode: 'insensitive',
      }
    }

    const result = await this.prisma.brand.findMany({
      select: {
        slug: true,
        name: true,
      },
      where,
    })

    this.logger.info(`[ProductBrandRepository] Successfully retrieved brands (${result.length} items) in ${(performance.now() - start).toFixed(2)}ms`)

    return {
      items: result,
      meta: {},
    }
  }
}
