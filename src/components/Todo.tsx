import { type Todo as TodoType } from '../types'

interface Props extends TodoType {
  onRemoveTodo: () => void
}

export const Todo: React.FC<Props> = ({ title, completed, onRemoveTodo }) => {
  return (
            <div>
                <input type="checkbox" className='toggle' checked={completed} onChange={() => {}}/>
                <label >{title}</label>
        <button className='destroy' onClick={onRemoveTodo} ></button>
      </div>
  )
}
