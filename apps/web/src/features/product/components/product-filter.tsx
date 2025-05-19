import { useSearchParams } from 'react-router'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useDebounceFn } from '@/hooks/use-debounce'

export function ProductFilter() {
  const [searchParams, setSearchParams] = useSearchParams()
  const updateSearchParams = useDebounceFn((key: string, value: string) => setSearchParams({ ...Object.fromEntries(searchParams), [key]: value }))

  return (
    <Card className="col-span-12 lg:col-span-3 p-4 h-fit">
      <h2 className="text-lg font-semibold">Filter</h2>

      <div className="flex flex-col gap-2">
        <Label htmlFor="search">Search</Label>
        <Input
          type="text"
          placeholder="Search"
          id="search"
          defaultValue={searchParams.get('q') || ''}
          onChange={e => updateSearchParams('q', e.target.value)}
        />
      </div>

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

      <div className="flex flex-col gap-2">
        <select
          name="sort"
          id="sort"
          defaultValue={searchParams.get('sort') || ''}
          onChange={e => updateSearchParams('sort', e.target.value)}
        >
          <option value="" disabled>Choose...</option>
          <option value="price-asc">Cheapest Price</option>
          <option value="price-desc">Expensive Price</option>
          <option value="createdAt-asc">Newest</option>
          <option value="createdAt-desc">Oldest</option>
        </select>
      </div>
    </Card>
  )
}
