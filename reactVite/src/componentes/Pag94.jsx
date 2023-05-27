import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { Torre } from "./Torre";
import { Raton } from "./raton";
import { Monitor } from "./Monitor";
import { Pendrive } from "./Pendrive";
import { Teclado } from "./Teclado";
import MyCard from "./Card";



// function Navbar() {
//   // visible en cada página
//   return  (
//     <nav>
//   <NavLink to="/">Home</NavLink>
//   <NavLink to="/about">About</NavLink>
//   </nav>
//   )
// }
//Sólo se verá cuando en la ruta está en el comienzo con /
function Home() {
  return (
  <div>
    <h1>Sasha Mykhaylov Krutkova</h1>
    <div>
      <h3>Sobre mi:</h3>
      <p>sasha20031218@gmail.com</p>
      <p> +34 666 66 66 66</p>
    </div>
    <div>
      <h3>Lenguajes:</h3>
      <p>Español</p>
      <p>Ingles</p>
      <p>Ruso</p>
    </div>
    <div>
      <h3>Educacion:</h3>
      <p>Escuela Primaria Velazquez</p>
      <p>IES Cardenal Cisneros</p>
      <p>IES Cura Valera</p>
    </div>
    <div>
      <h3>Sobre mi:</h3>
      <p>Soy un estudiante que le encanta el tema del cacharreo con los ordenadores, me interesa el tema de soldar para arreglar componentes dañados, la seguridad ya sea fisico o por digital.</p>
    </div>
  </div>
  )
}

//Sólo se verá cuando en la ruta esta con /about, como si fuera una página diferente en otra carpeta del sitio
function About() {
  return <div>about</div>;
}



//Sólo se verá cuando en la ruta esta con error
function NoPage() {
  return <h3>Esta página no existe (ERROR 404)</h3>;
}

//Rutas a través de la barra de menú
export function Pag94() {
  return (
    <Router>
      <Navbar2 />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<MyCard/>} />
        <Route path="/torre" element={<Torre/>} />
        <Route path="/raton" element={<Raton/>} />
        <Route path="/monitor" element={<Monitor/>} />
        <Route path="/pendrive" element={<Pendrive/>} />
        <Route path="/teclado" element={<Teclado/>} />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </Router>
  );
}
// function Navbar2() {
//   return (
//     <nav>
//       <NavLink to="/">Home</NavLink> <br/>
//       <NavLink to="/about">About</NavLink> <br/>
//       <NavLink to="/torre">Torre</NavLink> <br/>
//       <NavLink to="/raton">Raton</NavLink> <br/>
//       <NavLink to="/monitor">Monitor</NavLink> <br/> 
//       <NavLink to="/pendrive">Pendrive</NavLink><br/>
//       <NavLink to="/teclado">Teclado</NavLink><br/>
//     </nav>
//   )
// }
function Navbar2() {
  return (
    <div></div>
  )
}

//Función que saca información del parámetro colocado
// function MySkills2() {
//   //Lectura del parámetro de la URL
//   const params = useParams();
//   return <h3>Parámetro introducido 👉️ {params.nombre}</h3>;
// }

// function MySkills2() {
//   const params = useParams();
//   let nombre=params.nombre;
//   switch (nombre){
//     case "torre":
//       return <Torre />;break;
//     case "teclado":
//       return <Teclado />; break;
//     case "raton":
//       return <Raton />; break;
//     case "pendrive":
//       return <Pendrive />; break;
//     case "monitor":
//       return <Monitor />; break;
//   }
  
// }


  