import Add from '@/components/Add'
import ToDo from '@/components/ToDo'
import styles from '@/styles/Home.module.css'
import { GetStaticProps } from 'next'

export default function Home({ todo }) {
  return (
    <div className='container'>
      <Add />
      <ToDo />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const responce = await fetch(`${process.env.API_HOST}/toDo`)
    const data = responce.json()

    if (!data) {
      return {
        notFound: true
      }
    }

    return {
      props: { todo: data }
    }
  } catch {
    return {
      props: { todo: null }
    }
  }
}