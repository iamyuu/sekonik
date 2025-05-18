import { customAlphabet } from 'nanoid'

export function genRequestId() {
  return customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', 5)()
}
