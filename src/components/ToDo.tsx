import { ToDoType } from '@/types/todo'
import React from 'react'

const ToDo: React.FC<ToDoType> = ({ comment, id }) => {
  const deleteTodo = async () => {
    const res = await fetch(`/api/toDo/${toDoId}`, {
      method: 'DELETE'
    })
    const data = await res.json()
    console.log(data);

  }

  return (
    <>
      <button onClick={() => deleteTodo(id)}>Delete</button>
      <div>
        <input type="checkbox" />
        {comment}
      </div>
    </>
  )
}

export default ToDo