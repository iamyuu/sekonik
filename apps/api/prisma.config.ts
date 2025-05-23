import type { PrismaConfig } from 'prisma'

export default {
  earlyAccess: true,
  schema: './src/database/schema',
} satisfies PrismaConfig
