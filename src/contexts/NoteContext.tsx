import { createContext, useState, useEffect } from 'react'

import { Note } from '../types/Note'

import { generateId } from '../utils/generateId'

interface NoteContextProps {
  notes: Note[]
  addNote: (content: string) => void
  updateNote: (id: number, content: string) => void
  deleteNote: (id: number) => void
  toggleFixNote: (id: number) => void
  copyNote: (id: number) => void
  searchNotes: () => Note[]

  searchTerm: string
  toSearch: (searchTerm: string) => void
}

export const NoteContext = createContext<NoteContextProps | undefined>(
  undefined,
)

interface NoteProviderProps {
  children: React.ReactNode
}

export function NoteProvider({ children }: NoteProviderProps) {
  const [notes, setNotes] = useState<Note[]>([])
  const [searchTerm, setSearchTerm] = useState('')

  function toSearch(term: string) {
    setSearchTerm(term)
  }

  function searchNotes(): Note[] {
    const filteredNotes = notes.filter((note) =>
      note.content.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()),
    )
    return filteredNotes.sort((a, b) => (a.fixed > b.fixed ? -1 : 1))
  }

  function saveNotesToLocalStorage(notes: Note[]): void {
    localStorage.setItem('notes', JSON.stringify(notes))
  }

  function getNotesFromLocalStorage(): Note[] {
    const storedNotes = localStorage.getItem('notes')
    if (storedNotes) {
      const objectNotes: Note[] = JSON.parse(storedNotes)
      const orderedNotes = objectNotes.sort((a, b) =>
        a.fixed > b.fixed ? -1 : 1,
      )
      return orderedNotes
    }
    return []
  }

  useEffect(() => {
    const savedNotes = getNotesFromLocalStorage()
    if (savedNotes.length > 0) setNotes(savedNotes)
  }, [])

  function addNote(content: string) {
    const newNote: Note = {
      id: generateId(),
      content,
      fixed: false,
    }
    const updatedNotes = [...notes, newNote]
    updateNotesAndLocalStorage(updatedNotes)
  }

  function updateNote(id: number, content: string) {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, content } : note,
    )
    updateNotesAndLocalStorage(updatedNotes)
  }

  function deleteNote(id: number) {
    const updatedNotes = notes.filter((note) => note.id !== id)
    updateNotesAndLocalStorage(updatedNotes)
  }

  function toggleFixNote(id: number) {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, fixed: !note.fixed } : note,
    )
    updateNotesAndLocalStorage(updatedNotes)
  }

  function copyNote(id: number) {
    const targetNote = notes.find((note) => note.id === id)
    if (targetNote) {
      const newNote: Note = {
        ...targetNote,
        id: generateId(),
      }
      const updatedNotes = [...notes, newNote]
      updateNotesAndLocalStorage(updatedNotes)
    }
  }

  function updateNotesAndLocalStorage(updatedNotes: Note[]) {
    setNotes(updatedNotes)
    saveNotesToLocalStorage(updatedNotes)
  }

  return (
    <NoteContext.Provider
      value={{
        notes,
        searchTerm,
        addNote,
        updateNote,
        deleteNote,
        toggleFixNote,
        copyNote,
        searchNotes,
        toSearch,
      }}
    >
      {children}
    </NoteContext.Provider>
  )
}
