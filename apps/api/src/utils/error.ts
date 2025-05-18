/**
 * Define all error types here,
 * so the error can be catched and handled in a consistent way
 */

import { TRPCError } from '@trpc/server'

export class UnauthorizedError extends TRPCError {
  constructor() {
    super({
      code: 'UNAUTHORIZED',
      message: 'You need to be logged in to access this resource',
      cause: 'No session',
    })
  }
}
