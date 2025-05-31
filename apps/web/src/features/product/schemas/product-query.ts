import { z } from 'zod'
import { defaultSort } from '../config/filter'

const optionalString = z.string().nullish()

export const SearchParamsSchema = z.object({
  // Search
  keyword: optionalString,

  // Sorting
  sort: optionalString.default(defaultSort),

  // Pagination
  page: z.coerce.number().nullish().default(1),
  pageSize: z.coerce.number().nullish().default(50),

  // Filtering
  brand: optionalString,
  category: optionalString,

  minPrice: optionalString,
  maxPrice: optionalString,

  minStock: optionalString,
})
