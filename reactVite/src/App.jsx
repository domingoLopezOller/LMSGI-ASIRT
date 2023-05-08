import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import  { Cabecera,  Cabecera2 }  from './componentes/cabecera'
import Elementolista from './componentes/elementolista'

function App() {

  return(
    <div>
      <p>Creando cabeceras en React</p>
  <Cabecera />
  <Cabecera2 />

  <p>Creando listas en React</p>
  <ul>
    <Elementolista />
    </ul>

    <RedesSociales />
  </div>

  

  )
}

export default App
