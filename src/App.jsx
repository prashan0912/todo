
import './App.css'
import TodoList from './TodoList/TodoList'
import AddTodo from './addTodo/addTodo'
import { useState } from 'react'
import todoContext from './context/TodoContext'

function App() {
  const [list, setList] = useState([
    { id: 1, todoData: 'todo 1', finished: false },
    { id: 2, todoData: 'todo 2', finished: true }
  ])

  return (
    <TodoContext.Provider>
      <AddTodo updateList={(e) => setList([...list, { id: list.length + 1, todoData: e, finished: false }])} />
      <TodoList list={list} updateList={setList} />
    </TodoContext.Provider>
  )
}

export default App
