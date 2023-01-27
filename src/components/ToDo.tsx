import { ToDoProps } from '@/types/todo'
import { GetStaticProps } from 'next'
import React from 'react'

const ToDo: React.FC<ToDoProps> = ({ todos }) => {

  return (
    <div>
      <ul>
        {
          todos &&
          todos.map((obj: any) => (
            <li key={obj.id}>{obj.name}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default ToDo

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await fetch(`${process.env.API_HOST}/toDo`)
    const data = await res.json()

    if (!data) {
      return {
        notFound: true
      }
    }

    return {
      props: { todos: data }
    }
  } catch {
    return {
      props: { todos: null }
    }
  }
}