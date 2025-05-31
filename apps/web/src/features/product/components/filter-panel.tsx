import { Suspense } from 'react'
import { useSearchParams } from 'react-router'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectSkeleton, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useDebounceFn } from '@/hooks/use-debounce'
import { defaultSort } from '../config/filter'
import { ProductBrandSelection } from './brand-selection'
import { ProductCategorySelection } from './category-selection'

export function ProductFilterPanel() {
  const [searchParams, setSearchParams] = useSearchParams()
  const updateSearchParams = useDebounceFn((key: string, value: string) => setSearchParams({ ...Object.fromEntries(searchParams), [key]: value }))

  return (
    <Card className="p-4 h-fit shadow-none">
      <h2 className="text-lg font-semibold">Filter</h2>

      <hr />

      <Suspense fallback={<SelectSkeleton label="Brand" />}>
        <ProductBrandSelection
          defaultValue={searchParams.get('brand')}
          onChange={value => updateSearchParams('brand', value)}
        />
      </Suspense>

      <Suspense fallback={<SelectSkeleton label="Category" />}>
        <ProductCategorySelection
          defaultValue={searchParams.get('category')}
          onChange={value => updateSearchParams('category', value)}
        />
      </Suspense>

      <div className="flex flex-col gap-2">
        <Label htmlFor="minStock">Minimum Stock</Label>

        <Input
          type="text"
          inputMode="numeric"
          placeholder="0"
          defaultValue={searchParams.get('minStock') || ''}
          onChange={e => updateSearchParams('minStock', e.target.value)}
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

      <Label>Sort</Label>

      <Select defaultValue={searchParams.get('sort') || defaultSort} onValueChange={value => updateSearchParams('sort', value)}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="featured.desc">Featured</SelectItem>
          <SelectItem value="createdAt.asc">Newest</SelectItem>
          <SelectItem value="createdAt.desc">Oldest</SelectItem>
          <SelectItem value="name.asc">Product Name: A - Z</SelectItem>
          <SelectItem value="name.desc">Product Name: Z - A</SelectItem>
          <SelectItem value="price.asc">Price: Low - High</SelectItem>
          <SelectItem value="price.desc">Price: High - Low</SelectItem>
        </SelectContent>
      </Select>
    </Card>
  )
}
