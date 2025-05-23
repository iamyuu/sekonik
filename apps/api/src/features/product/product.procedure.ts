import { z } from 'zod'
import { container } from '@/utils/di'
import { defineRouter, publicProcedure } from '@/utils/trpc'
import { ProductCategoryRepository } from './product-category.repository'
import { ProductRepository } from './product.repository'
import { ProductQuerySchema } from './product.schema'

export const productRouter = defineRouter({
  getProducts: publicProcedure
    .input(ProductQuerySchema)
    .query(async ({ input }) =>
      await container.resolve(ProductRepository).findMany(input),
    ),

  getBySlug: publicProcedure
    .input(z.string())
    .query(async ({ input }) =>
      await container.resolve(ProductRepository).findBySlug(input),
    ),

  getAllCategories: publicProcedure
    .query(async () =>
      await container.resolve(ProductCategoryRepository).findMany(),
    ),
})
