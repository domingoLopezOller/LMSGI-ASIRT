import { useState } from 'react'
import './App2.css'
import { Header } from './componentes/Header'
import { NavBar } from './componentes/NavBar'
import { Main } from './componentes/Main'
import { Footer } from './componentes/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <NavBar/>
    <Main/>
    <Footer/>
    </>
  )
}

export default App
