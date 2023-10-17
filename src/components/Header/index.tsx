import { SearchNotes } from '../SearchNotes'
import { ExportNotesButton } from '../ExportNotesButton'

export function Header() {
  return (
    <header className="border-b text-stone-600 dark:text-zinc-600 border-stone-300 dark:border-zinc-800 px-8 py-4 w-full flex flex-col md:flex-row items-center gap-4 justify-around">
      <h1 className="text-4xl font-bold">DevNotes</h1>

      <SearchNotes />

      <ExportNotesButton />
    </header>
  )
}
