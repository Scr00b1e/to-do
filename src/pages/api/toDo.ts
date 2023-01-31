import type { NextApiRequest, NextApiResponse } from 'next'
import { ToDoList } from './toDo/toDoList'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    res.status(200).json(ToDoList)
  } else if (req.method === 'POST') {
    const comment = req.body.comment
    const newTodo = {
      id: Date.now(),
      comment: comment
    }
    ToDoList.push(newTodo)
    res.status(201).json(newTodo)
  }
}
