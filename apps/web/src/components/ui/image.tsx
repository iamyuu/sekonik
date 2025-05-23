import { useEffect, useState } from 'react'
import { PendingFallback } from '@/components/fallback/pending-fallback'

type ImageStatus = 'pending' | 'loaded' | 'error'

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

function Img(props: ImageProps) {
  const [status, setStatus] = useState<ImageStatus>('pending')

  if (!props.src) {
    setStatus('error')
  }

  useEffect(() => {
    if (!props.src) {
      return
    }

    const img = new Image()
    img.src = props.src!
    img.onload = () => {
      setStatus('loaded')
    }
    img.onerror = () => {
      setStatus('error')
    }

    return () => {
      img.onload = null
      img.onerror = null
    }
  }, [props.src])

  if (status === 'pending') {
    return <PendingFallback />
  }

  return <img {...props} src={status === 'loaded' ? props.src : '/placeholder.svg'} />
}

export { Img as Image }
