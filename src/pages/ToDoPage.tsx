import Add from '@/components/Add'
import ToDo from '@/components/ToDo'
import { ToDoProps } from '@/types/todo'
import Button from '@mui/material/Button'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

const ToDoPage: React.FC<ToDoProps> = ({ todos }) => {
    const router = useRouter()

    if (!todos) {
        return (
            <div className="container">
                <h1>Something is wrong...</h1>
            </div>
        )
    }

    if (todos.length === 0) {
        return (
            <div className='container'>
                <div className="todoPage">
                    <Add />
                    <h1>There's no to-dos yet</h1>
                    <Button variant='contained' onClick={() => router.push('/')}>Back</Button>
                </div>
            </div>
        )
    }

    return (
        <div className='container'>
            <div className='todoPage'>
                <Add />
                <div className='todoPage__list'>
                    {
                        todos &&
                        todos.map((obj: any) => (
                            <li key={obj.id} className='todoPage__card'>
                                <ToDo {...obj} />
                            </li>
                        ))
                    }
                </div>
                <Button variant='contained' onClick={() => router.push('/')}>Back</Button>
            </div>
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