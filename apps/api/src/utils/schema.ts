import { z } from 'zod'

export const optionalString = z.string().nullish()

export const PaginationSchema = z.object({
  page: z.coerce.number().nullish().transform(value => value ?? 1),
  pageSize: z.coerce.number().nullish().transform(value => value ?? 15),
})
