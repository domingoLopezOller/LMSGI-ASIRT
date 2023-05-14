import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import  { Cabecera,  Cabecera2 }  from './componentes/cabecera'
import  Elementolista  from './componentes/elementolista'
import  RedesSociales, { RedesSociales2 }  from './componentes/RedesSociales'


function App() {
  const [count, setCount] = useState(0);
  let vector=[1,4,77,34]
  let enlaces
  return(
    <div>
      <p>Creando cabeceras en React</p>
  <Cabecera />
  <Cabecera2 mensaje="hola como estas" otro={vector} />
  <Cabecera2 otro={vector} />

  <p>Creando listas en React</p>
  <ul>
    <Elementolista />
    </ul>

    <RedesSociales />


    <RedesSociales2 />
  </div>

  

  )
}

export default App
