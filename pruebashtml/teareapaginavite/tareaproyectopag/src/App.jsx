import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Rutas from './componentes/rutas'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <p>reactavanzado gestion de rutas </p>
       </div>
      <Rutas/>
    </>
  )
}

export default App
