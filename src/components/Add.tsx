import { TextField } from '@mui/material'
import React from 'react'
// async function AddTodo(name: string) {
//     await fetch(`${process.env.API_HOST}/toDo/add`, {
//         method: "POST",
//         body: JSON.stringify({ name })
//     })
// }

const Add: React.FC = () => {
    const [comment, setComment] = React.useState('')
    const onAdd = async () => {
        const res = await fetch(`${process.env.API_HOST}/toDo`, {
            method: 'POST',
            body: JSON.stringify({ comment }),
            // headers: {
            //     'Content-Type': 'application/json'
            // }
        })
        const data = await res.json()
        console.log(data);

    }

    return (
        <div>
            {/* <TextField id="filled-basic" label="Filled" variant="filled" /> */}
            <TextField type="text" value={comment} onChange={(e) => setComment(e.target.value)} variant="outlined" id="outlined-basic" label="Outlined" />
            <button onClick={onAdd}>Add</button>
        </div>
    )
}

export default Add