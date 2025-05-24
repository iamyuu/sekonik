import { createEnv } from '@t3-oss/env-core'
import { z } from 'zod'

export const env = createEnv({
  // eslint-disable-next-line node/prefer-global/process -- this file expected to call `process.env`
  runtimeEnv: process.env,

  server: {
    APP_HOST: z.string().default('0.0.0.0'),
    APP_PORT: z.coerce.number().default(8080),

    WEB_URL: z.string().url().default('http://localhost:5173'),

    DATABASE_URL: z.string().default('postgresql://usr:secret@localhost:5432/sekonik?schema=public'),
  },
})
