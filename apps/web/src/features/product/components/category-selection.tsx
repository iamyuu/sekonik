import type { ComboboxProps } from '@/components/ui/comboxbox'
import { useState } from 'react'
import { Combobox } from '@/components/ui/comboxbox'
import { Label } from '@/components/ui/label'
import { useDebounceFn } from '@/hooks/use-debounce'
import { useProductCategories } from '../services/category'

interface ProductCategorySelectionProps extends Pick<ComboboxProps, 'defaultValue' | 'onChange'> {
}

export function ProductCategorySelection(props: ProductCategorySelectionProps) {
  const [filter, setFilter] = useState('')
  const query = useProductCategories({ keyword: filter })
  const changeFilter = useDebounceFn<string>(value => setFilter(value))

  if (query.error) {
    return null
  }

  const items = query.data?.items.map(category => ({
    value: category.slug,
    label: category.name,
  })) ?? []

  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor="category">Category</Label>

      <Combobox
        items={items}
        fieldName="category"
        defaultValue={props.defaultValue}
        onChange={props.onChange}
        onSearch={value => changeFilter(value)}
      />
    </div>
  )
}
