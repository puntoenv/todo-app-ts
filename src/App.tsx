import { useState } from 'react'
import { Todos } from './components/Todos'

const mocktTodos = [
  {
    id: 1,
    title: 'Ver el Twich de Midu',
    completed: true
  },
  {
    id: 2,
    title: 'Aprender React con TypeScript',
    completed: false
  },
  {
    id: 3,
    title: 'Sacar ticket de la miduFest',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mocktTodos)

  const handleRemove = (id: number): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <main className='todoapp'>
    <Todos todos={todos} onRemoveTodo={handleRemove}/>
    </main>
  )
}

export default App
