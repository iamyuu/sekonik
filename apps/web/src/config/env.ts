import { createEnv } from '@t3-oss/env-core'
import { z } from 'zod'

export const env = createEnv({
  runtimeEnv: import.meta.env,

  clientPrefix: 'VITE_',
  client: {
    VITE_API_URL: z.string().default('http://localhost:8080/api'),
  },
})
