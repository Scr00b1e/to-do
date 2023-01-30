import React from 'react'

const Add: React.FC = () => {
    const [comment, setComment] = React.useState('')
    const onAdd = async () => {
        const res = await fetch(`/api/toDo`, {
            method: 'POST',
            body: JSON.stringify({ comment }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json()
        console.log(data);

    }

    return (
        <div>
            <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} />
            <button onClick={onAdd}>Add</button>
        </div>
    )
}

export default Add