import { ToDoType } from '@/types/todo'
import React from 'react'

const ToDo: React.FC<ToDoType> = ({ comment }) => {

  return (
    <>
      <button>Delete</button>
      <div>
        <input type="checkbox" />
        {comment}
      </div>
    </>
  )
}

export default ToDo