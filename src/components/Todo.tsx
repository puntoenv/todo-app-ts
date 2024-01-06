import { type TodoCompleted, type TodoId, type Todo as TodoType } from '../types'

interface Props extends TodoType {
  onRemoveTodo: () => void
  onToggleCompleteTodo: ({ id, completed }: TodoId & TodoCompleted) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onToggleCompleteTodo }) => {
  return (
    <div>
      <input
        type="checkbox"
        className="toggle"
        checked={completed}
        onChange={(e) => { onToggleCompleteTodo({ id, completed: e.target.checked }) }}
      />
      <label>{title}</label>
      <button className="destroy" onClick={onRemoveTodo}></button>
    </div>
  )
}
