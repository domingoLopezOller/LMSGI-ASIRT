import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import './App2.css'
import { Header } from './componentes/Header'
import { Main } from './componentes/Main'
import { Footer } from './componentes/Footer'
import NavBar from './componentes/NavBar'

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
