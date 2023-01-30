import Add from '@/components/Add'
import ToDo from '@/components/ToDo'
import { ToDoProps } from '@/types/todo'
import Button from '@mui/material/Button'
import ListItem from '@mui/material/ListItem'
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
            <div className='todoPage'>
                <Add />
                <ListItem className='todoPage__list'>
                    {
                        todos &&
                        todos.map((obj: any) => (
                            <li key={obj.id} className='todoPage__card'>
                                <ToDo {...obj} />
                            </li>
                        ))
                    }
                </ListItem>
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