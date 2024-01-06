import { useState } from 'react'
import { Todos } from './components/Todos'
import { type FilterValue, type TodoCompleted, type TodoId } from './types'
import { TODO_FILTERS } from './consts'
import { Footer } from './components/Footer'

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
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

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

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const activeCount = todos.filter((todo) => !todo.completed).length

  const completedCount = todos.length - activeCount

  const filteredTodos = todos.filter((todo) => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  return (
    <div className='todoapp'>
    <Todos
      onToggleCompleteTodo={handleCompleted}
      onRemoveTodo={handleRemove}
      todos={filteredTodos}
    />
    <Footer
    activeCount={activeCount}
    completedCount={completedCount}
    onClearCompleted={() => {}}
    filterSelected={filterSelected}
    handleFilterChange={handleFilterChange}
    />
    </div>
  )
}

export default App
