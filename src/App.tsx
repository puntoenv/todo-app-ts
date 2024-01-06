import { useState } from 'react'
import { Todos } from './components/Todos'
import { type TodoCompleted, type TodoId } from './types'

const mocktTodos = [
  {
    id: '1',
    title: 'Ver el Twich de Midu',
    completed: true
  },
  {
    id: '2',
    title: 'Aprender React con TypeScript',
    completed: false
  },
  {
    id: '3',
    title: 'Sacar ticket de la miduFest',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mocktTodos)

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = ({ id, completed }: TodoId & TodoCompleted): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  return (
    <main className='todoapp'>
    <Todos
      onToggleCompleteTodo={handleCompleted}
      onRemoveTodo={handleRemove}
      todos={todos}
    />
    </main>
  )
}

export default App
