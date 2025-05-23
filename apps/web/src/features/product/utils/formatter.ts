import type { ProductDTO } from '../services/product'

export function formatDimensions(dimensions: ProductDTO['dimensions']) {
  if (!dimensions || typeof dimensions !== 'object') {
    return ''
  }

  let width = ''
  let height = ''
  let depth = ''

  if ('width' in dimensions && typeof dimensions.width === 'number') {
    width = `${dimensions.width}cm`
  }

  if ('height' in dimensions && typeof dimensions.height === 'number') {
    height = `${dimensions.height}cm`
  }

  if ('depth' in dimensions && typeof dimensions.depth === 'number') {
    depth = `${dimensions.depth}cm`
  }

  return [width, height, depth].filter(Boolean).join(' x ')
}
