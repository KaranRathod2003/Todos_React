import { createContext, useContext } from 'react'

//1
export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo message",
            completed: false
        }
    ],
    addTodo : (todo) => {},
    updatedTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})



//2
export const useTodo = () => {
    return useContext(TodoContext)
}



//3
export const TodoProvider = TodoContext.Provider