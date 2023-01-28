import ToDo from '@/components/ToDo'
import { ToDoProps } from '@/types/todo'
import { GetStaticProps } from 'next'
import React from 'react'

const ToDoPage: React.FC<ToDoProps> = ({ todos }) => {

    if (!todos) {
        return (
            <ul>
                <li>
                    <input type="text" />
                    shitty stuff bros
                    <button>Delete</button>
                </li>
                <li>
                    <input type="text" />
                    shitty stuff bros
                    <button>Delete</button>
                </li>
                <li>
                    <input type="text" />
                    shitty stuff bros
                    <button>Delete</button>
                </li>
            </ul>
        )
    }

    return (
        <div className='container'>
            <ul>
                {
                    todos &&
                    todos.map((obj: any) => (
                        <li key={obj.id}>
                            <ToDo name={obj.name} />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ToDoPage

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