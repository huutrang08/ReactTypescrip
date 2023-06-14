
import './App.css';

import React, { useState } from 'react'
import InputField from './components/InputField';
import Todo from './Model';
import { DataRouterContext } from 'react-router/dist/lib/context';

const App: React.FC = () => {
  const [todo,setTodo] = useState<String>("")
  const [todos,setTodos] = useState<Todo[]>([])
  const handleAdd = (e: React.FormEvent)=>{
     e.preventDefault()
     if(todo){
       setTodos([...todos,{id:Date.now(),todo:todo,isDone:false}])
  }
  return (
    <div className="App">
      <span className="heading">TASKFY</span>
      <InputField todo ={todo} setTodo = {setTodo} handleAdd = {handleAdd}/>
    </div>
  )
}
export default App
