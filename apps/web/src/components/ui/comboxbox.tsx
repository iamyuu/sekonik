import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react'
import * as React from 'react'

import { Button } from '@/components/ui/button'
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/utils/functions'

export interface ComboboxProps {
  items: Array<{ value: string, label: string }>
  fieldName?: string
  defaultValue?: string | null
  onChange?: (value: string) => void
  onSearch?: (search: string) => void
}

export function Combobox(props: ComboboxProps) {
  const [open, setOpen] = React.useState(false)
  const [selected, setSelected] = React.useState(props.defaultValue || '')

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {props.items.find(item => item.value === selected)?.label || `Select ${props.fieldName}`}
          <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-full p-0">
        <Command
          filter={(_value, search) => {
            props.onSearch?.(search)
            return 1
          }}
        >
          <CommandInput placeholder={`Search ${props.fieldName}`} />
          <CommandList>
            {props.items.length < 1
              ? <CommandItem className="py-6 text-center text-sm">No item found.</CommandItem>
              : (
                  <CommandGroup>
                    {props.items.map(item => (
                      <CommandItem
                        key={item.value}
                        value={item.value}
                        onSelect={(currentValue) => {
                          const nextValue = currentValue === selected ? '' : currentValue

                          props.onChange?.(nextValue)
                          setSelected(nextValue)
                          setOpen(false)
                        }}
                        className="flex justify-between items-center"
                      >
                        <span>{item.label}</span>
                        <CheckIcon
                          className={cn(
                            'mr-2 h-4 w-4',
                            selected === item.value ? 'opacity-100' : 'opacity-0',
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
