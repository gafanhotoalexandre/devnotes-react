import { Sun, Moon } from '@phosphor-icons/react'
import { useState, useEffect } from 'react'

export function ToggleTheme() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme === 'dark') {
      setIsDarkTheme(true)
      document.body.classList.add('dark')
    } else {
      setIsDarkTheme(false)
      document.body.classList.remove('dark')
    }
  }, [])

  function toggle() {
    if (isDarkTheme) {
      localStorage.setItem('theme', 'light')
      document.body.classList.remove('dark')
    } else {
      localStorage.setItem('theme', 'dark')
      document.body.classList.add('dark')
    }
    setIsDarkTheme(!isDarkTheme)
  }

  return (
    <div
      onClick={toggle}
      className="fixed group bottom-4 right-8 dark:bg-zinc-800 text-zinc-100 bg-stone-400 p-4 rounded-full cursor-pointer hover:opacity-75 transition z-50"
    >
      {isDarkTheme ? (
        <Sun className="icon-toggle-theme" size={24} />
      ) : (
        <Moon className="icon-toggle-theme" size={24} />
      )}
    </div>
  )
}
