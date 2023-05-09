import { useState } from "react";

// import "./App.css";
import { Cabecera, Cabecera2 } from "./componentes/Cabecera";
import { ElementoLista } from "./componentes/ElementoLista";
import { RedesSociales } from "./componentes/RedesSociales";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p> Creando cabeceras en React </p>
      <Cabecera />
      <Cabecera2 />

      <p> Creando una lista en React </p>
      <ul>
        <ElementoLista />
        <ElementoLista />
      </ul>

      <RedesSociales />
    </div>
  );
}

export default App;