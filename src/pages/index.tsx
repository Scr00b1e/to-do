import Button from '@mui/material/Button'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  return (
    <div className='container'>
      <h1>Welcome!</h1>
      <Button variant='contained' onClick={() => router.push('/ToDoPage')}>Go to page</Button>
    </div>
  )
}