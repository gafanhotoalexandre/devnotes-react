import { MagnifyingGlass } from '@phosphor-icons/react'
import { useNoteContext } from '../../hooks/useNoteContext'

export function SearchNotes() {
  const { searchTerm, toSearch } = useNoteContext()

  return (
    <div className="flex items-center w-full md:w-auto gap-4">
      <input
        className="dark:bg-zinc-800 bg-stone-300 rounded px-3 py-2 w-full md:w-96"
        type="text"
        placeholder="Busque por uma nota..."
        value={searchTerm}
        onChange={(e) => toSearch(e.target.value)}
      />
      <MagnifyingGlass size={24} />
    </div>
  )
}
