import { createStore } from '@xstate/store'

export type IAuthForm = 'sign-in' | 'sign-up'

export const authStore = createStore({
  context: {
    opennedForm: null as IAuthForm | null,
  },

  on: {
    openForm: (_context, payload: { open: IAuthForm }) => ({
      opennedForm: payload.open,
    }),

    closeForm: () => ({
      opennedForm: null,
    }),
  },
})
