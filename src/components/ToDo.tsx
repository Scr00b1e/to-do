import { ToDoType } from '@/types/todo'
import React from 'react'

const ToDo: React.FC<ToDoType> = ({ name }) => {

  return (
    <>
      <input type="checkbox" />
      {name}
      <button>Delete</button>
    </>
  )
}

export default ToDo