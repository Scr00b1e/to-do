import { ToDoType } from '@/types/todo'
import React from 'react'

const ToDo: React.FC<ToDoType> = ({ comment }) => {

  return (
    <>
      <input type="checkbox" />
      {comment}
      <button>Delete</button>
    </>
  )
}

export default ToDo