import { z } from 'zod'
import { optionalString } from '@/utils/schema'

export const ComboboxSchema = z.object({
  keyword: optionalString,
  limit: z.number().optional().default(9),
})

export type ComboboxDTO = z.infer<typeof ComboboxSchema>
