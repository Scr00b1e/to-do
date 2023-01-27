import type { NextApiRequest, NextApiResponse } from 'next'
import { ToDoList } from './data/toDoList'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(ToDoList)
}
