import { ToDoList } from "./data/toDoList"

export const addTodo = (name: string) => {
    const newTodo = {
        id: '0',
        name,
        isDone: false
    }
    ToDoList.push(newTodo)
}