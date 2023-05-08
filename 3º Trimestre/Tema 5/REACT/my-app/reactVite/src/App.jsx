import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Cabecera, Cabecera2 }  from './componentes/Cabecera'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Cabecera/>
      <Cabecera2/>
    </div>
  )
}

export default App
