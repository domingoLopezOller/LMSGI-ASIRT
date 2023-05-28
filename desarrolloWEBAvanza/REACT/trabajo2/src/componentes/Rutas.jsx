import React from 'react'
import { BrowserRouter, Route, Routes, useParams} from 'react-router-dom';
import Error from './Error.jsx';
import NavBar from './NavBar.jsx';
import AboutMe from './AboutMe.jsx';
import Curriculum from './Curriculum.jsx';
import Productos from './Productos.jsx';

export default function Rutas () {
  return (
    <BrowserRouter>
      <header>
          <NavBar/>
      </header>
      
      <main>
      <Routes>
        <Route exact path="/" element={<Home/>} />
          <Route path="/producto/:nombre" element={<Producto/>} />
          <Route path="/minfo" element={<MiInfo/>} />
        <Route path="*" element={<NoPage/>} />
      </Routes>
      </main>
    </BrowserRouter>
  )
}

function Home() {
  return (
      <Curriculum />
  );
}

function MiInfo(){
  return (
    <AboutMe color="verde"/>
  );
}

function Producto() {
  const params = useParams();
  let nombre=params.nombre;
  switch (nombre){
    case "raton":
      return (
        <Productos nombre={nombre}/>
      );
      break;
      case "pantalla":
      return (
        <Productos nombre={nombre}/>
      );
      break;
      case "teclado":
      return (
        <Productos nombre={nombre}/>
      );
      break;
      case "caja":
      return (
        <Productos nombre={nombre}/>
      );
      break;
      case "usb":
      return (
        <Productos nombre={nombre}/>
      );
      break;
    default:
      return (<h2>No se encuentra el producto {nombre}, por favor, inténtalo de nuevo. </h2>);
  }
  
}

function NoPage() {
  return (
  <div>
    <Error />
  </div>
  );
}