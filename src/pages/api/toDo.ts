import type { NextApiRequest, NextApiResponse } from 'next'
import { addTodo } from './addTodo'
import { ToDoList } from './data/toDoList'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method = 'GET') {
    res.status(200).json(ToDoList)
  } else {
    if (req.method = 'POST') {
      const { name: toDoList } = JSON.parse(req.body)
      addTodo(toDoList)
    }
  }
}
