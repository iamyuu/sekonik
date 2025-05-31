import { User } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { authClient } from '../service/auth-client'
import { authStore } from '../store/auth'

export function AvatarUser() {
  const auth = authClient.useSession()

  if (!auth.data?.session) {
    return (
      <Button variant="ghost" size="sm" className="p-1" onClick={() => authStore.trigger.openForm({ open: 'sign-in' })}>
        <User className="h-5 w-5" />
      </Button>
    )
  }

  return (
    <Avatar>
      <AvatarImage src={auth.data.user.image || undefined} />
      <AvatarFallback>{auth.data.user.name?.slice(0, 2).toUpperCase() || '??'}</AvatarFallback>
    </Avatar>
  )
}
