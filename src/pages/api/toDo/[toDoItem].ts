import { NextApiRequest, NextApiResponse } from "next";
import { ToDoList } from "./toDoList";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { toDoItem } = req.query
    if (req.method === 'GET') {
        const toDo = ToDoList.find((obj: any) => obj.id === toDoItem)
        res.status(200).json(toDo)
    } else if (req.method === 'DELETE') {
        const deleteTodo = ToDoList.find((obj: any) => obj.id === (toDoItem))

        const index = ToDoList.findIndex(
            (obj) => obj.id === parseInt(toDoItem)
        )
        ToDoList.splice(index, 1)

        res.status(200).json(deleteTodo)
    }
}