import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from './button'

export interface SimplePaginationProps {
  hasNext?: boolean
  hasPrev?: boolean

  onNext: () => void
  onPrev: () => void
}

export function SimplePagination(props: SimplePaginationProps) {
  return (
    <div className="flex items-center space-x-2 justify-end">
      <Button variant="outline" onClick={props.onPrev} disabled={!props.hasPrev}>
        <ChevronLeft className="mr-2 h-4 w-4" />
      </Button>
      <Button variant="outline" onClick={props.onNext} disabled={!props.hasNext}>
        <ChevronRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  )
}
