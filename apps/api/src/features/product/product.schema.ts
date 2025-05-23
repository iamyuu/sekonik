import { z } from 'zod'

export const ProductQuerySchema = z
  .object({
    // Search
    keyword: z.string().optional(),

    // Filtering
    minPrice: z.coerce.number().min(0).optional(),
    maxPrice: z.coerce.number().min(0).optional(),

    minStock: z.coerce.number().min(0).optional(),

    featured: z.boolean().optional(),

    // Sorting
    sortBy: z.enum(['featured', 'name', 'price', 'createdAt']).default('featured'),
    sortDirection: z.enum(['asc', 'desc']).default('asc'),

    // Pagination
    cursor: z.string().ulid().optional(),
    limit: z.coerce.number().min(1).max(100).default(15),
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

    // Validate sorting
    if (data.sortDirection && data.sortBy === undefined) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['sortBy'],
        message: 'sortBy is required when sortDirection is provided',
      })
    }
  })

export type ProductListQueryDTO = z.infer<typeof ProductQuerySchema>
