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
  const [todos] = useState(mocktTodos)
  return (
    <main className='todoapp'>
    <Todos todos={todos} />
    </main>
  )
}

export default App
