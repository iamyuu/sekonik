import type { ValueOf } from '@/types/utils'
import { useEffect, useState } from 'react'
import { Skeleton } from './skeleton'

const placeholderImage = '/placeholder.svg'

const ImageStatus = {
  Pending: 'pending',
  Loaded: 'loaded',
  Error: 'error',
} as const

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

function Img(props: ImageProps) {
  const [status, setStatus] = useState<ValueOf<typeof ImageStatus>>(ImageStatus.Pending)

  if (!props.src) {
    setStatus(ImageStatus.Error)
  }

  useEffect(() => {
    if (!props.src) {
      return
    }

    const img = new Image()
    img.src = props.src!
    img.onload = () => setStatus(ImageStatus.Loaded)
    img.onerror = () => setStatus(ImageStatus.Error)

    // Remove event listeners on unmount
    return () => {
      img.onload = null
      img.onerror = null
    }
  }, [props.src])

  if (status === ImageStatus.Pending) {
    return <Skeleton className="w-full h-full" />
  }

  if (status === ImageStatus.Error) {
    return <img {...props} src={placeholderImage} />
  }

  return <img {...props} src={props.src} />
}

export { Img as Image }
