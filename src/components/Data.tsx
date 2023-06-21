import React from 'react'
import Todo from '../Model';
import './style.css'
import SingleTodo from './SingleTodo';
interface Props {
  datas: Todo[];
  setDatas: React.Dispatch<React.SetStateAction<Todo[]>>
}
const Data:React.FC<Props> = ({datas,setDatas}) => {
  return (
    <div className='todos'>
        {datas.map(todo=>(
            <SingleTodo
            key={todo.id.toString()}
            todo={todo}
            datas={datas}
            setDatas={setDatas}
            />
        ))}
    </div>
  )
}

export default Data