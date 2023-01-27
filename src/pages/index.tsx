import Add from '@/components/Add'
import ToDo from '@/components/ToDo'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <div className='container'>
      <Add />
      <ToDo />
    </div>
  )
}
