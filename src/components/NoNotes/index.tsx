interface NoNotesProps {
  className?: string
}

export function NoNotes({ className }: NoNotesProps) {
  return (
    <div className="absolute w-full p-5">
      <p
        className={`dark:text-zinc-200 text-stone-600 border dark:border-zinc-800 border-stone-300 rounded px-5 py-3 text-center text-xl ${className}`}
      >
        Não há notas registradas.
      </p>
    </div>
  )
}
