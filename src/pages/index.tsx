import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  return (
    <div className='container'>
      <h1>Welcome!</h1>
      <button onClick={() => router.push('/ToDoPage')}>Go to page</button>
    </div>
  )
}