import { ToDoType } from '@/types/todo'
import { useRouter } from 'next/router'
import React from 'react'
import toDoItem from '../pages/api/toDo/[toDoItem]'

const ToDo: React.FC<ToDoType> = ({ comment, id }) => {
  const deleteTodo = async () => {
    try {
      const res = await fetch(`/api/toDo/${toDoItem}`, {
        method: 'DELETE'
      })
      const data = await res.json()
      console.log(data);
    } catch {
      return alert('Loading...')
    }
  }
  const router = useRouter()
  const forceReload = () => {
    router.reload()
  }

  return (
    <div onClick={() => forceReload()} className='toDo'>
      <button
        onClick={() => deleteTodo(id)}
        className='toDo__btn'>Delete</button>
      <div onClick={(e) => e.stopPropagation()} className="toDo__words">
        <input type="checkbox" />
        <p className='toDo__text'>{comment}</p>
      </div>
    </div>
  )
}

export default ToDo