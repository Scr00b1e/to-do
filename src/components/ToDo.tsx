import { ToDoType } from '@/types/todo'
import { useRouter } from 'next/router'
import React from 'react'
import toDoItem from '../pages/api/toDo/[toDoItem]'

const ToDo: React.FC<ToDoType> = ({ comment, id }) => {
  const deleteTodo = async () => {
    const res = await fetch(`/api/toDo/${toDoItem}`, {
      method: 'DELETE'
    })
    const data = await res.json()
    console.log(data);
  }
  const router = useRouter()
  const forceReload = () => {
    router.reload()
  }

  return (
    <div onClick={() => forceReload()}>
      <button onClick={() => deleteTodo(id)}>Delete</button>
      <div>
        <input type="checkbox" />
        {comment}
      </div>
    </div>
  )
}

export default ToDo