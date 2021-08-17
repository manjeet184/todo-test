import { useState } from 'react'
import './App.css'
import TodoDisplay from './Components/TodoDisplay'
import TodoInput from './Components/TodoInput'

function App() {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])
  console.log('data', todos)

  const handleVal = () => {
    input.length > 0 && addHandler()
  }

  const addHandler = () => {
    setTodos((todo) => {
      return [...todo, input]
    })
    setInput('')
  }
  return (
    <div className="App">
      <h1>TODO List</h1> <hr />
      <TodoInput addHandler={handleVal} input={input} setInput={setInput} />
      <TodoDisplay todos={todos} />
    </div>
  )
}

export default App
