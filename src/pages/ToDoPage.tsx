import Add from '@/components/Add'
import ToDo from '@/components/ToDo'
import { ToDoProps } from '@/types/todo'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

const ToDoPage: React.FC<ToDoProps> = ({ todos }) => {
    const router = useRouter()

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
            <Add />
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
            <button onClick={() => router.push('/')}>Back</button>
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