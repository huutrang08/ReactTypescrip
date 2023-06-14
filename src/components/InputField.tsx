import React from 'react'
import './style.css'
interface Props {
  todo: String;
  setTodo: any;
  handleAdd:any;
}
const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  return (
    <form className="input" onSubmit={handleAdd}>
      <input type="text"
        value={todo.toString()}
        onChange={(e) => setTodo(e.target.value)}
        className="input_box" placeholder="Write something" />
      <button className="input_submit">
        Go
      </button>
    </form>

  )
}

export default InputField