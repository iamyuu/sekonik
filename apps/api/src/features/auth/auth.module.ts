import { betterAuth } from 'better-auth'
import { prismaAdapter } from 'better-auth/adapters/prisma'
import { admin } from 'better-auth/plugins'
import { env } from '@/config/env'
import { prisma } from '@/database/client'

export const auth = betterAuth({
  trustedOrigins: [env.WEB_URL],

  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),

  emailAndPassword: {
    enabled: true,
  },

  plugins: [
    admin(),
  ],
})
