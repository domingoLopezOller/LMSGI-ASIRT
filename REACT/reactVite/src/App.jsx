import { useState } from "react";

// import "./App.css";
import { Cabecera, Cabecera2 } from "./componentes/Cabecera";
import { ElementoLista } from "./componentes/ElementoLista";
import { RedesSociales, RedesSociales2 } from "./componentes/RedesSociales";
import Notificaciones from "./componentes/Notificaciones";
import { ListarItems, TablaItems } from "./componentes/ListarItems";

function App() {
  const [count, setCount] = useState(0);
  let vector=[1,4,77,34];
  let enlace=[
    {imagen:"https://upload.wikimedia.org/wikipedia/commons/8/82/Facebook_icon.jpg",url:"https://es-es.facebook.com/"},
    {imagen:"http://www.igestweb.es/blog/wp-content/uploads/2013/09/instagram.png",url:"https://www.instagram.com/"}
  ];
  return (
    <div>
      <p> Creando cabeceras en React </p>
      <Cabecera loquesea="loquesea"/>
      <Cabecera2 mensaje="hola como estás" otro={vector}/>
      <Cabecera2 otro={vector}/>

      <p> Creando una lista en React </p>
      <ul>
        <ElementoLista />
        <ElementoLista />
      </ul>

      <RedesSociales />

      <RedesSociales2 enlaces={enlace}/>


      <p>Componente que comprueba si los atributos están puestos y con valores correctos</p>
      <Notificaciones message='' type="success"  id={3}/>


      <p>Crear una lista a partir de un array</p>
      <ListarItems />
      <TablaItems />
      </div>
  );
}

export default App;