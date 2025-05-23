import { Loader2 } from 'lucide-react'
import { cn } from '@/utils/functions'

export function PendingFallback(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className={cn('flex h-full items-center justify-center', props.className)}>
      <Loader2 className="animate-spin" />
    </div>
  )
}
