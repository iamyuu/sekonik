import { createStore } from '@xstate/store'

export const cartStore = createStore({
  context: {
    items: [],
  },

  on: {},
})
