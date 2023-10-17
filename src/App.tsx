import { Header } from './components/Header'
import { AddNote } from './components/AddNote'
import { ToggleTheme } from './components/ToggleTheme'
import { NoteList } from './components/NoteList'

function App() {
  return (
    <>
      <ToggleTheme />

      <Header />
      {/* Add note container */}
      <AddNote />

      {/* Notes container */}
      <NoteList />
    </>
  )
}

export default App
