import { useContext } from 'react'
import { NoteContext } from '../contexts/NoteContext'

export function useNoteContext() {
  const context = useContext(NoteContext)

  if (!context) {
    throw new Error(
      'useNoteContext precisa ser usado dentro de um NoteProvider.',
    )
  }
  return context
}
