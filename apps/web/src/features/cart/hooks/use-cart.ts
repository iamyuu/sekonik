import { useSelector } from '@xstate/store/react'
import { toast } from 'sonner'
import { authClient, authStore } from '@/features/auth'
import { cartStore } from '../store/cart'

export function useCart() {
  const auth = authClient.useSession()
  const count = useSelector(cartStore, state => state.context.items.length)

  const openCart = () => {
    if (!auth.data?.session) {
      authStore.trigger.openForm({ open: 'sign-in' })
      return
    }

    // TODO: open cart
    toast.info('Cart not implemented yet')
  }

  return {
    count,
    openCart,
  }
}
