// import "./App.css";
import { Cabecera, Cabecera2 } from "./Componentes/Cabecera";
import { ElementoLista } from "./Componentes/lista";
import Notificaciones from "./Componentes/notificaciones";
import { ListarItems, TablaItems } from "./Componentes/items";
import { CabeceraHook } from "./componentes/Hooks";

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
      <CabeceraHook/>
      <CabeceraHooks/>
    
      </div>
  );
}

export default App;