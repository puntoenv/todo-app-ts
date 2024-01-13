import { useState } from 'react'
import { type TodoTitle } from '../types'

interface Props {
  saveTodo: ({ title }: TodoTitle) => void
}

export const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    saveTodo({
      title: inputValue
    })
    setInputValue('')
    e.currentTarget.reset()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="new-todo"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value)
        }}
        placeholder="¿Qué quieres hacer?"
        autoFocus
      />
    </form>
  )
}
