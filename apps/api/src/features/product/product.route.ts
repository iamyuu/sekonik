import { container } from '@/utils/di'
import { defineRouter, publicProcedure } from '@/utils/trpc'
import { ProductRepository } from './product.repository'

export const productRouter = defineRouter({
  getProducts: publicProcedure.query(async () => {
    const repository = container.resolve(ProductRepository)
    return await repository.findMany()
  }),
})
