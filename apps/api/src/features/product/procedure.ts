import { z } from 'zod'
import { container } from '@/utils/di'
import { defineRouter, publicProcedure } from '@/utils/trpc'
import { ProductBrandRepository } from './repository/brand'
import { ProductCategoryRepository } from './repository/category'
import { ProductRepository } from './repository/product'
import { ComboboxSchema } from './schemas/combobox'
import { ProductQuerySchema } from './schemas/product-query'

export const productRouter = defineRouter({
  getProducts: publicProcedure
    .input(ProductQuerySchema)
    .query(async ({ input }) => {
      return await container.resolve(ProductRepository).findMany(input)
    }),

  getBySlug: publicProcedure
    .input(z.string())
    .query(async ({ input }) => {
      return await container.resolve(ProductRepository).findBySlug(input)
    }),

  getAllCategories: publicProcedure
    .input(ComboboxSchema)
    .query(async ({ input }) => {
      return await container.resolve(ProductCategoryRepository).findMany(input)
    }),

  getAllBrands: publicProcedure
    .input(ComboboxSchema)
    .query(async ({ input }) => {
      return await container.resolve(ProductBrandRepository).findMany(input)
    }),
})
