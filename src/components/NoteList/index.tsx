import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useNoteContext } from '../../hooks/useNoteContext'
import { Note } from '../Note'
import { NoNotes } from '../NoNotes'

export function NoteList() {
  const { searchNotes } = useNoteContext()
  const [parent] = useAutoAnimate()

  const notes = searchNotes()

  return (
    <section
      ref={parent}
      className="grid justify-center px-5 md:px-0 pb-10 gap-8 md:grid-cols-auto-fill grid-cols-auto-fill-mobile"
    >
      {notes.length > 0 ? (
        notes.map((note) => <Note key={note.id} {...note} />)
      ) : (
        <NoNotes />
      )}
    </section>
  )
}
