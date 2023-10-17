import { X, FilePlus, PushPinSimple } from '@phosphor-icons/react'
import { useNoteContext } from '../../hooks/useNoteContext'

interface NoteActionsProps {
  id: number
}

export function NoteActions({ id }: NoteActionsProps) {
  const { deleteNote, copyNote, toggleFixNote } = useNoteContext()

  return (
    <>
      <X
        className="absolute right-3 top-3 text-xl hover:scale-150 transition-all cursor-pointer text-stone-400 dark:text-zinc-400"
        onClick={() => deleteNote(id)}
      />

      <FilePlus
        className="absolute right-3 top-12 text-xl hover:scale-150 transition-all cursor-pointer text-stone-400 dark:text-zinc-400"
        onClick={() => copyNote(id)}
      />

      <PushPinSimple
        className="absolute left-3 bottom-3 p-1 text-3xl bg-stone-300 dark:bg-zinc-800 rounded cursor-pointer hover:opacity-80 transition-all"
        onClick={() => toggleFixNote(id)}
      />
    </>
  )
}
