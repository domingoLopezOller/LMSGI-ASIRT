import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  {Cabecera, Cabecera2, CabeceraSocial3, ListarItems, NotificationCard}  from './componentes/Cabecera'
import ExtraerINFO, { ProcesarJSONTabla, ProcesarJSONLista, ArrayMedia } from './componentes/ProcesarJSON'
import AxiosApi from './componentes/AxiosApi'
import Rutas from './componentes/Rutas'
import {RutaOutlet} from './componentes/RutaOutlet'

function App() {
  const [count, setCount] = useState(0);
  let nombre="Domingo";

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Pincha varias veces y verás que pasa</p>
      <Cabecera />
      <Cabecera2 title="Hola mundo" subtitle={"Hola que tal?"} />
      
      <CabeceraSocial3  subtitle={`Hola que tal ${nombre}?`} />
      <ListarItems />
      
      <ArrayMedia />
      {/* <ProcesarJSONLista />
      <ProcesarJSONTabla />
       */}
      
      <ExtraerINFO tipo="tabla"/>
      <AxiosApi/>
      
      <h3>Ejemplo de uso de rutas</h3>
      {/* <Rutas/> */}
       <RutaOutlet/>


    </div>
  );
}

export default App


