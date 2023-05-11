import { useState } from "react";

// import "./App.css";
import { Cabecera, Cabecera2 } from "./componentes/Cabecera";
import { ElementoLista } from "./componentes/ElementoLista";
import { RedesSociales, RedesSociales2 } from "./componentes/RedesSociales";

function App() {
  const [count, setCount] = useState(0);
  let vector=[1,4,77,34];
  let enlaces=[
    {imagen:"https://upload.wikimedia.org/wikipedia/commons/8/82/Facebook_icon.jpg", url:"https://upload.wikimedia.org/wikipedia/commons/8/82/Facebook_icon.jpg"},
    {imagen:"https://png.pngtree.com/element_our/png_detail/20181011/instagram-social-media-icon-design-template-vector-png_127006.jpg", url:"https://png.pngtree.com/element_our/png_detail/20181011/instagram-social-media-icon-design-template-vector-png_127006.jpg"},
  ];

  return (
    <div>
      <p> Creando cabeceras en React </p>
      <Cabecera />
      <Cabecera2 mensaje="hola como estás" otro={vector}/>
      <Cabecera2 otro={vector}/>

      <p> Creando una lista en React </p>
      <ul>
        <ElementoLista />
        <ElementoLista />
      </ul>

      <RedesSociales />

      <RedesSociales2/>
    </div>
  );
}

export default App;
