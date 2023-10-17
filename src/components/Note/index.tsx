import { useState } from 'react'
import { useNoteContext } from '../../hooks/useNoteContext'

import { NoteActions } from '../NoteActions'

interface NoteProps {
  id: number
  content: string
  fixed: boolean
}

export function Note({ id, content, fixed }: NoteProps) {
  const { updateNote } = useNoteContext()
  const [noteContent, setNoteContent] = useState(content)

  function updateTextAreaNoteContent(
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) {
    const updatedContent = e.target.value
    setNoteContent(updatedContent)
    updateNote(id, updatedContent)
  }

  return (
    <article
      className={`min-h-[12.5rem] p-4 border border-stone-300 dark:border-zinc-600 rounded-xl text-white relative transition-all ${
        fixed ? 'fixed-note' : 'bg-transparent'
      }`}
    >
      <textarea
        className="bg-transparent h-full outline-none"
        value={noteContent}
        onChange={(e) => updateTextAreaNoteContent(e)}
      />

      {/* Note actions */}
      <NoteActions id={id} />
    </article>
  )
}
