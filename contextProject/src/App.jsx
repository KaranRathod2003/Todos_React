import { useEffect, useState } from 'react'

import './App.css'
import { TodoProvider } from './context'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]) // previous array ko bhi add kiya prev se aur new todo ko bhi add kiya with id 
  }

  const updatedTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        (prevTodo.id === id ? todo : prev)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }


  const toggleComplete = (id) => {

    setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo))
  }


  // local storage

  useEffect(() =>{
    const todos = JSON.parse(localStorage.getItem("todos"))

    if( todos && todos.length > 0){
      setTodos(todos)
    }
  }, [])  // part 1

  useEffect(() =>{
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos]) // part 2



  return (
    <TodoProvider value={{ todos, addTodo, updatedTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
           
            {todos.map((todo) => 
            (<div key={todo.id} className='w-full'>
                <TodoItem todo={todo} />
            </div>))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
