import type { ComboboxProps } from '@/components/ui/comboxbox'
import { useState } from 'react'
import { Combobox } from '@/components/ui/comboxbox'
import { Label } from '@/components/ui/label'
import { useDebounceFn } from '@/hooks/use-debounce'
import { useProductBrands } from '../services/brand'

interface ProductBrandSelectionProps extends Pick<ComboboxProps, 'defaultValue' | 'onChange'> {
}

export function ProductBrandSelection(props: ProductBrandSelectionProps) {
  const [filter, setFilter] = useState('')
  const query = useProductBrands({ keyword: filter })
  const changeFilter = useDebounceFn<string>(value => setFilter(value))

  if (query.error) {
    return null
  }

  const items = query.data?.items.map(brand => ({
    value: brand.slug,
    label: brand.name,
  })) ?? []

  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor="brand">Brand</Label>

      <Combobox
        items={items}
        fieldName="brand"
        defaultValue={props.defaultValue}
        onChange={props.onChange}
        onSearch={value => changeFilter(value)}
      />
    </div>
  )
}
