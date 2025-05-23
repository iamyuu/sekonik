import { useSearchParams } from 'react-router'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useDebounceFn } from '@/hooks/use-debounce'

export function ProductFilterPanel() {
  const [searchParams, setSearchParams] = useSearchParams()
  const updateSearchParams = useDebounceFn((key: string, value: string) => setSearchParams({ ...Object.fromEntries(searchParams), [key]: value }))

  return (
    <Card className="p-4 h-fit shadow-none">
      <h2 className="text-lg font-semibold">Filter</h2>

      <hr />

      <div className="flex flex-col gap-2">
        <Label htmlFor="price">Price</Label>

        <div className="flex gap-2">
          <Input
            type="text"
            inputMode="numeric"
            placeholder="Min"
            defaultValue={searchParams.get('minPrice') || ''}
            onChange={e => updateSearchParams('minPrice', e.target.value)}
          />
          <Input
            type="text"
            inputMode="numeric"
            placeholder="Max"
            defaultValue={searchParams.get('maxPrice') || ''}
            onChange={e => updateSearchParams('maxPrice', e.target.value)}
          />
        </div>
      </div>

      <hr />

      <h2 className="text-lg font-semibold">Sort</h2>

      <Select defaultValue={searchParams.get('sort') || 'featured-asc'} onValueChange={value => updateSearchParams('sort', value)}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Sort" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="featured-asc">Featured</SelectItem>
          <SelectItem value="price-asc">Cheapest Price</SelectItem>
          <SelectItem value="price-desc">Expensive Price</SelectItem>
          <SelectItem value="createdAt-asc">Newest</SelectItem>
          <SelectItem value="createdAt-desc">Oldest</SelectItem>
        </SelectContent>
      </Select>
    </Card>
  )
}
