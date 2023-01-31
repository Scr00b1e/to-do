import Button from '@mui/material/Button'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  return (
    <div className='container'>
      <div className='home'>
        <h1 className='home__title'>Welcome!</h1>
        <Button variant='contained' onClick={() => router.push('/ToDoPage')}>Go to page</Button>
      </div>
    </div>
  )
}