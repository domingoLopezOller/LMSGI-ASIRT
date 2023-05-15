import { useState } from "react";

// import "./App.css";
import { Cabecera, Cabecera2, CabeceraEstilos } from "./componentes/Cabecera";
import { ElementoLista } from "./componentes/ElementoLista";
import { RedesSociales, RedesSociales2 } from "./componentes/RedesSociales";
import { ListarItems, TablaItems } from "./componentes/ListarItems";

function App() {
  const [count, setCount] = useState(0);
  let vector=[1,4,77,34]
  
  return(
    <div>
    <p> Creando cabeceras en React </p>
    <Cabecera loquesea="loquesea"/>
    <Cabecera2 mensaje="hola como estás" otro={vector}/>
    <Cabecera2 otro={vector}/>


    <CabeceraEstilos mensaje="Como mola React  con estilos" color="verde" />
    <p> Creando una lista en React </p>
    <ul>
      <ElementoLista />
      <ElementoLista />
    </ul>

    <RedesSociales />


    <p>Componente que comprueba si los atributos están puestos y con valores correctos</p>
    {/* <Notificaciones message='' type="success"  id={3}/> */}


    <p>Crear una lista a partir de un array</p>
    <ListarItems />
    <TablaItems />
    </div>

  

  )
}

export default App
