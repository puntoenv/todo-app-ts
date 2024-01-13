import { useState } from 'react'
import { type TodoId, type ListOfTodos, type TodoCompleted, type TodoTitle } from '../types'
import { Todo } from './Todo'

interface Props {
  todos: ListOfTodos
  onRemoveTodo: ({ id }: TodoId) => void
  onToggleCompleteTodo: ({ id, completed }: TodoId & TodoCompleted) => void
  updateTodo: ({ id, title }: TodoId & TodoTitle) => void
}

export const Todos: React.FC<Props> = ({
  todos,
  onRemoveTodo,
  onToggleCompleteTodo,
  updateTodo
}) => {
  const [isEditing, setIsEditing] = useState('')
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`${todo.completed ? 'completed' : ''} ${isEditing === todo.id ? 'editing' : ''}`}
          onDoubleClick={() => { setIsEditing(todo.id) }}
        >
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onRemoveTodo={() => {
              onRemoveTodo({ id: todo.id })
            }}
            onToggleCompleteTodo={onToggleCompleteTodo}
            updateTodo={updateTodo}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
          />
        </li>
      ))}
    </ul>
  )
}
