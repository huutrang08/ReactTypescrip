
import React from 'react'
import Todo from '../Model'
import { AiFillCreditCard, AiFillDelete, AiOutlineFileDone } from "react-icons/ai"
type Props = {
  todo: Todo,
  datas: Todo[],
  setDatas: React.Dispatch<React.SetStateAction<Todo[]>>
}


const SingleTodo = ({ todo, datas, setDatas }: Props) => {
  const handleDone = (id: Number) => {
    setDatas(datas.map((e) => e.id === id ? { ...todo, isDone: true,todo:"Xong",id:id } : todo))
  }
  const handleDele = (id:Number)=>{
    setDatas(datas.filter((e) => (e.id !== id)))
  }
  return (
    <form className='todos_single'>
      {todo.isDone ? (<span className="todos__single--text">
      {todo.todo}
      </span>) : (<span className="todos__single--text">
      {todo.todo}
      </span>)}

      <div>
        <span className='icon'>
          <AiFillCreditCard />
        </span>
        <span className='icon' onClick={() => handleDele(todo.id)}>
          <AiFillDelete />
        </span>
        <span className='icon' onClick={() => handleDone(todo.id)}>
          <AiOutlineFileDone />
        </span>
      </div>
    </form>
  )
}

export default SingleTodo