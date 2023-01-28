import type { NextApiRequest, NextApiResponse } from 'next'
import { ToDoList } from './data/toDoList'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method = 'GET') {
    res.status(200).json(ToDoList)
  } else {
    if (req.method = 'POST') {
      const toDos = req.body.todos
      const newToDos = {
        id: Date.now(),
        name: toDos
      }
      toDos.push(newToDos)
    }
  }
}
