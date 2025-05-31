import { Search } from 'lucide-react'
import * as React from 'react'
import { useNavigate, useSearchParams } from 'react-router'
import { Button } from '@/components/ui/button'
import {
  CommandDialog,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { Input } from '@/components/ui/input'
import { createContext } from '@/utils/create-context'

const KEYBOARD_SHORTCUT = 'K' // + ⌘ or Ctrl

interface SearchboxContextValue {
  setOpen: (open: boolean) => void
  onSearchEnter: (event: React.KeyboardEvent<HTMLInputElement>) => void
}

const [useSearchbox, SearchboxProvider] = createContext<SearchboxContextValue>()

export function SearchboxRoot(props: React.PropsWithChildren) {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [value, setValue] = React.useState(() => searchParams.get('q') || '')
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === KEYBOARD_SHORTCUT.toLowerCase() && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        setOpen(val => !val)
      }
    }

    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  const handleChangeSearch = (keyword: string) => {
    setOpen(false)

    searchParams.set('q', keyword)
    navigate({ pathname: '/product', search: searchParams.toString() })
  }

  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      handleChangeSearch(event.currentTarget.value)
    }
  }

  return (
    <SearchboxProvider value={{ setOpen, onSearchEnter: handleEnter }}>
      {props.children}

      <CommandDialog open={open} onOpenChange={setOpen} command={{ shouldFilter: false }}>
        <CommandInput placeholder="Search products..." defaultValue={value} onValueChange={setValue} onKeyDown={handleEnter} />
        <CommandList>
          {value
            ? (
                <CommandGroup>
                  <CommandItem onClick={() => handleChangeSearch(value)}>
                    Search for
                    {' '}
                    {value}
                  </CommandItem>
                </CommandGroup>
              )
            : null}
        </CommandList>
      </CommandDialog>
    </SearchboxProvider>
  )
}

export function SearchboxInput() {
  const { onSearchEnter } = useSearchbox()

  return (
    <div className="hidden md:block relative">
      <Input
        type="search"
        placeholder="Search products..."
        className="w-128 pl-8"
        onKeyDown={onSearchEnter}
      />
      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      <kbd className="absolute right-2 top-2.5 bg-muted text-muted-foreground pointer-events-none inline-flex h-5 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 select-none">
        <span className="text-xs">⌘</span>
        {KEYBOARD_SHORTCUT.toUpperCase()}
      </kbd>
    </div>
  )
}

export function SearchboxButton() {
  const { setOpen } = useSearchbox()

  return (
    <Button variant="ghost" size="sm" className="p-1" onClick={() => setOpen(true)}>
      <Search className="h-5 w-5" />
    </Button>
  )
}
