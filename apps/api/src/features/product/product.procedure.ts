import { container } from '@/utils/di'
import { defineRouter, publicProcedure } from '@/utils/trpc'
import { ProductRepository } from './product.repository'
import { ProductQuerySchema } from './product.schema'

export const productRouter = defineRouter({
  getProducts: publicProcedure
    .input(ProductQuerySchema)
    .query(async ({ input }) =>
      await container.resolve(ProductRepository).findMany(input),
    ),
})
