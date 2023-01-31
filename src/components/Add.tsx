import { useRouter } from 'next/router'
import React from 'react'

const Add: React.FC = () => {
    const [comment, setComment] = React.useState('')
    const onAdd = async () => {
        try {
            const res = await fetch(`/api/toDo`, {
                method: 'POST',
                body: JSON.stringify({ comment }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await res.json()
            console.log(data);
            forceReload()
        } catch {
            return alert('Something is wrong...')
        }
    }
    const router = useRouter()
    const forceReload = () => {
        router.reload()
    }

    return (
        <div className='add'>
            <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} className='add__text' placeholder='Write something...' />
            <button onClick={onAdd} className='add__btn'>Add</button>
        </div>
    )
}

export default Add