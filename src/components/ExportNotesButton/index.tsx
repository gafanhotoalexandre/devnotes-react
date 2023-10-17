import { DownloadSimple } from '@phosphor-icons/react'
import { useNoteContext } from '../../hooks/useNoteContext'

export function ExportNotesButton() {
  const { notes } = useNoteContext()

  function exportData() {
    if (notes.length === 0) {
      return alert('Não há dados para exportar.')
    }

    const csvContent = `ID,Conteúdo,Fixado?\n${notes
      .map((note) => `${note.id},${note.content},${note.fixed}`)
      .join('\n')}`

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)

    const downloadLink = document.createElement('a')
    downloadLink.href = url
    downloadLink.download = `notes_${new Date().toISOString()}.csv`
    downloadLink.click()

    URL.revokeObjectURL(url)
  }

  return (
    <button
      className="flex items-center gap-2 border border-stone-300 dark:border-zinc-600 dark:hover:bg-zinc-600 dark:hover:text-zinc-400 hover:bg-stone-300 transition px-4 py-2 rounded"
      onClick={exportData}
    >
      Exportar CSV
      <DownloadSimple size={20} />
    </button>
  )
}
