import type { ProductListQueryDTO } from './product.schema'
import type { Prisma, PrismaClient } from '@/database/generated/client'
import type { Logger } from '@/utils/logger'
import { inject, injectable } from 'tsyringe'

@injectable()
export class ProductRepository {
  constructor(
    @inject('Logger') private readonly logger: Logger,
    @inject('Prisma') private readonly prisma: PrismaClient,
  ) {}

  async findBySlug(slug: string) {
    this.logger.info(`[ProductRepository] Retrieving product with slug: ${slug}`)

    const start = performance.now()

    const product = await this.prisma.product.findUnique({
      where: {
        slug,
      },
      include: {
        brand: true,
        category: true,
        images: true,
      },
    })

    this.logger.info(`[ProductRepository] Successfully retrieved product with slug: ${slug} in ${(performance.now() - start).toFixed(2)}ms`)

    return product
  }

  async findMany(input: ProductListQueryDTO) {
    this.logger.info(`[ProductRepository] Retrieving list of products with input: ${JSON.stringify(input)}`)

    const start = performance.now()

    const orderBy: Prisma.ProductOrderByWithRelationInput[] = [
      { [input.sortBy]: input.sortDirection },
      // Use id as tie-breaker, so it'll make sure we get unique items
      { id: input.sortDirection },
    ]

    // Using transaction to get products and count in one round trip to the database
    const result = await this.prisma.product.findMany({
      select: {
        id: true,
        slug: true,
        name: true,
        price: true,
        thumbnailUrl: true,
        stockQuantity: true,
        discountPercentage: true,
        category: {
          select: {
            name: true,
            slug: true,
          },
        },
      },
      where: this.buildWhereProducts(input),
      orderBy,
      // Implement cursor pagination
      cursor: input.cursor ? { id: input.cursor } : undefined,
      // Skip the cursor item itself
      skip: input.cursor ? 1 : undefined,
      // Take one extra item for pagination
      take: input.limit + 1,
    })

    // Check if there's more data than requested (to determine next cursor)
    const hasMore = result.length > input.limit

    // If we fetched one extra item (for pagination), remove it from result
    const items = hasMore ? result.slice(0, -1) : result

    // Next cursor will be the ID of the last item in the result
    const nextCursor = hasMore ? items[items.length - 1].id : null

    this.logger.info(`[ProductRepository] Successfully retrieved list of products (${result.length} items) in ${(performance.now() - start).toFixed(2)}ms`)

    return {
      items,
      meta: {
        nextCursor,
      },
    }
  }

  private buildWhereProducts(input: ProductListQueryDTO) {
    const where: Prisma.ProductWhereInput = {}

    if (input.keyword) {
      where.OR = [
        { name: { contains: input.keyword, mode: 'insensitive' } },
        { description: { contains: input.keyword, mode: 'insensitive' } },
      ]
    }

    if (input.minStock) {
      where.stockQuantity = { gte: input.minStock }
    }

    if (input.featured) {
      where.featured = true
    }

    if (input.minPrice || input.maxPrice) {
      where.price = {}

      if (input.minPrice)
        where.price.gte = input.minPrice

      if (input.maxPrice)
        where.price.lte = input.maxPrice
    }

    return where
  }
}
