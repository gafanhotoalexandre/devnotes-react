import { useState } from 'react'

import { Plus } from '@phosphor-icons/react'
import { useNoteContext } from '../../hooks/useNoteContext'

export function AddNote() {
  const { addNote } = useNoteContext()
  const [noteInput, setNoteInput] = useState('')

  function createNote() {
    addNote(noteInput)
    setNoteInput('')
  }
  function onEnterInput(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') createNote()
  }

  return (
    <section className="flex gap-4 md:w-96 px-8 md:px-0 mx-auto my-8">
      <input
        className="flex-1 px-3 py-2 rounded dark:bg-zinc-800 bg-stone-300"
        type="text"
        placeholder="O que deseja anotar?"
        value={noteInput}
        onChange={(e) => setNoteInput(e.target.value)}
        onKeyUp={(e) => onEnterInput(e)}
      />
      <button
        className="px-3 py-2 rounded dark:border-zinc-800 border border-stone-300 hover:dark:bg-zinc-800 group hover:bg-stone-300 transition"
        onClick={createNote}
      >
        <Plus className="dark:text-zinc-500 text-stone-400 group-hover:scale-150 group-hover:text-stone-50 dark:group-hover:text-zinc-100 transition-all" />
      </button>
    </section>
  )
}
