import { useState } from "react";

// import "./App.css";
import { Cabecera, Cabecera2 } from "./Componentes/Cabecera";
import {  ElemetoLista } from "./Componentes/lista";
import { RedesSociales } from "./Componentes/redessociales";

function App() {
  const [count, setCount] = useState(0);
  let vector=[1,4,77,34];
  let enlaces[
    {imagen:}
  ]
  return (
    <div>
      <p> Creando cabeceras en React </p>
      <Cabecera loquesea="loquesea" />
      <Cabecera2 mensaje="hola como estas" otro={vector}  />
      <Cabecera2 otro={vector} /> 

      <p> Creando una lista en React </p>
      <ul>
        <ElemetoLista/>
        <ElemetoLista/>
      </ul>
      <RedesSociales/>
      <p>componente que prueba que los atributos estan puestos y estan correctamente </p>
      
    </div>
  );
}

export default App;
