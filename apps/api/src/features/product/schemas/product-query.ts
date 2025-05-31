import { z } from 'zod'
import { optionalString, PaginationSchema } from '@/utils/schema'

const sortableField = {
  featured: true,
  name: true,
  price: true,
  createdAt: true,
}

const SortSchema = z
  .string()
  .regex(/^(\w+)\.(asc|desc)$/)
  .superRefine((value, ctx) => {
    const [sortBy, sortDirection] = value.split('.')

    if (!sortBy || !sortDirection) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['sort'],
        message: 'sort is not valid',
      })
    }

    if (!(sortBy in sortableField)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['sort'],
        message: 'sortBy is not valid',
      })
    }

    if (!['asc', 'desc'].includes(sortDirection)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['sort'],
        message: 'sortDirection is not valid',
      })
    }
  })
  .transform((value) => {
    const [by, direction] = value.split('.')
    return { by, direction }
  })

export const ProductQuerySchema = PaginationSchema
  .extend({
    // Search
    keyword: optionalString,

    // Sorting
    sort: SortSchema.nullish().transform(value => value ?? { by: 'featured', direction: 'desc' }),

    // Filtering
    brand: optionalString,
    category: optionalString,

    minStock: optionalString.transform(value => value ? Number(value) : undefined),

    minPrice: optionalString.transform(value => value ? Number(value) : undefined),
    maxPrice: optionalString.transform(value => value ? Number(value) : undefined),

    featured: z.boolean().optional(),
  })
  .superRefine((data, ctx) => {
    // Validate price range
    if (data.maxPrice && data.minPrice && data.maxPrice < data.minPrice) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['maxPrice'],
        message: 'maxPrice must be greater than or equal to minPrice',
      })
    }
  })

export type ProductListQueryDTO = z.infer<typeof ProductQuerySchema>
