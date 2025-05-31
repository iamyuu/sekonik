import type { ProductListQueryDTO } from '../schemas/product-query'
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
        brand: {
          select: { name: true, slug: true },
        },
        category: {
          select: { name: true, slug: true },
        },
        images: {
          select: { id: true, url: true },
        },
      },
    })

    this.logger.info(`[ProductRepository] Successfully retrieved product with slug: ${slug} in ${(performance.now() - start).toFixed(2)}ms`)

    return product
  }

  async findMany(input: ProductListQueryDTO) {
    this.logger.info(`[ProductRepository] Retrieving list of products with input: ${JSON.stringify(input)}`)

    const start = performance.now()

    const pageSize = input.pageSize
    const currentPage = input.page
    const skip = (currentPage - 1) * pageSize

    const where = this.buildWhereProducts(input)

    const [total, items] = await Promise.all([
      this.prisma.product.count({ where }),

      this.prisma.product.findMany({
        select: {
          id: true,
          slug: true,
          name: true,
          price: true,
          thumbnailUrl: true,
          stockQuantity: true,
          discountPercentage: true,
          category: {
            select: { name: true, slug: true },
          },
        },
        where,
        orderBy: { [input.sort.by]: input.sort.direction },
        skip,
        take: pageSize,
      }),
    ])

    this.logger.info(`[ProductRepository] Successfully retrieved list of products (${items.length} items) in ${(performance.now() - start).toFixed(2)}ms`)

    return {
      items,
      meta: {
        total,
        page: currentPage,
        pageSize,
        showing: items.length,
        hasNext: skip + pageSize < total,
        hasPrev: currentPage > 1,
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

    if (input.brand) {
      where.brand = { slug: input.brand }
    }

    if (input.category) {
      where.category = { slug: input.category }
    }

    if (input.minStock) {
      where.stockQuantity = { gte: input.minStock }
    }

    if (input.featured !== undefined && input.featured !== null) {
      where.featured = input.featured
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
