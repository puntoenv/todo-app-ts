import { useEffect, useRef, useState } from 'react'
import {
  type TodoTitle,
  type TodoCompleted,
  type TodoId,
  type Todo as TodoType
} from '../types'

interface Props extends TodoType {
  onRemoveTodo: () => void
  onToggleCompleteTodo: ({ id, completed }: TodoId & TodoCompleted) => void
  updateTodo: ({ id, title }: TodoId & TodoTitle) => void
  setIsEditing: (id: string) => void
  isEditing: string
}

export const Todo: React.FC<Props> = ({
  id,
  title,
  completed,
  isEditing,
  onRemoveTodo,
  onToggleCompleteTodo,
  updateTodo,
  setIsEditing
}) => {
  const [editedTitle, setEditedTitle] = useState(title)
  const inputEditTitle = useRef<HTMLInputElement>(null)

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      setEditedTitle(editedTitle.trim())

      if (editedTitle !== title) {
        updateTodo({ id, title: editedTitle })
      }
      if (editedTitle === '') {
        onRemoveTodo()
      }
      setIsEditing('')
    }
    if (e.key === 'Escape') {
      setEditedTitle(title)
      setIsEditing('')
    }
  }

  useEffect(() => {
    inputEditTitle.current?.focus()
  }, [isEditing])

  return (
    <>
      <div className="view">
        <input
          type="checkbox"
          className="toggle"
          checked={completed}
          onChange={(e) => {
            onToggleCompleteTodo({ id, completed: e.target.checked })
          }}
        />
        <label>{title}</label>

        <button className="destroy" onClick={onRemoveTodo}></button>
      </div>
      <input
        type="text"
        className="edit"
        value={editedTitle}
        onChange={(e) => {
          setEditedTitle(e.target.value)
        }}
        onKeyDown={handleKeyDown}
        onBlur={() => {
          setIsEditing('')
        }}
        ref={inputEditTitle}
      />
    </>
  )
}
