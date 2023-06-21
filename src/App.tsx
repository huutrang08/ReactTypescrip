
import './App.css';

import React, { useState } from 'react'
import InputField from './components/InputField';
import Todo from './Model';
import Data from './components/Data';

const App = () => {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }])
    }
  }
  return (
    <div className="App">
      <span className="heading">TASKFY</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <Data datas={todos} setDatas={setTodos} />
    </div>
  )
}
export default App
