import type { AppProps } from 'next/app'
import '../styles/globals.scss'
import '../styles/ToDoPage.scss'
import '../styles/toDo.scss'
import '../styles/add.scss'
import '../styles/header.scss'
import Header from '@/components/Header'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}
