import { createRouter } from '@/utils/router'
import { auth } from './auth.module'

export const authRoute = createRouter().on(['GET', 'POST'], '/api/auth/*', c => auth.handler(c.req.raw))
