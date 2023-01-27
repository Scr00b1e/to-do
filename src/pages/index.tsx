import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <div className='container'>
      <div>
        <input type="text" />
        <button>Add</button>
      </div>
      <div>
        <ul>
          <li>Todo 1</li>
          <li>Todo 2</li>
          <li>Todo 3</li>
          <li>Todo 4</li>
        </ul>
      </div>
    </div>
  )
}
