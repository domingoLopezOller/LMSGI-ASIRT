import React from 'react'
import { BrowserRouter, Route, Routes, useParams} from 'react-router-dom';
import Comerror404 from './Comerror404.jsx';
import CarouselBootstrap from './CarouselBootstrap.jsx';
import IconosRedesSociales from './IconosRedesSociales.jsx';
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
            <Route path="/carousel" element={<Carousel/>} />
            <Route path="/redesSociales" element={<RedesSociales/>} />
            <Route path="/productos/:nombre" element={<Producto/>} />
            <Route path="/sobremi" element={<SobreMi/>} />
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

  function Carousel() {
    let andalucia = [
        { nombre:"Almería", imagen: "/media/Almería.jpg", alt: "foto de Almería" },
        { nombre:"Cádiz", imagen: "/media/Cádiz.jpg", alt: "foto de Cádiz" },
        { nombre:"Córdoba", imagen: "/media/Córdoba.jpg", alt: "foto de Córdoba" },
        { nombre:"Granada", imagen: "/media/Granada.jpeg", alt: "foto de Granada" },
        { nombre:"Huelva", imagen: "/media/Huelva.jpg", alt: "foto de Huelva" },
        { nombre:"Jaén", imagen: "/media/Jaén.jpg", alt: "foto de Jaén" },
        { nombre:"Málaga", imagen: "/media/Málaga.jpg", alt: "foto de Málaga" },
        { nombre:"Sevilla", imagen: "/media/Sevilla.jpg", alt: "foto de Sevilla" },
      ];

    return (
        <div>
            <CarouselBootstrap andalucia={andalucia} />
        </div>
    );
  }

  function RedesSociales() {
    return (
        <IconosRedesSociales />
    );
  }

  function SobreMi(){
    return (
      <AboutMe color="verde"/>
    );
  }

  function Producto() {
    const params = useParams();
    let nombre=params.nombre;
    switch (nombre){
      case "impresora":
        return (
          <Productos nombre={nombre}/>
        );
        break;
        case "teclado":
        return (
          <Productos nombre={nombre}/>
        );
        break;
        case "usb":
        return (
          <Productos nombre={nombre}/>
        );
        break;
        case "raton":
        return (
          <Productos nombre={nombre}/>
        );
        break;
        case "monitor":
        return (
          <Productos nombre={nombre}/>
        );
        break;
      default:
        return (<h2>NO EXISTE ESTE PRODUCTO: {nombre} </h2>);
    }
    
  }

  function NoPage() {
    return (
    <div>
      <Comerror404 />
    </div>
    );
  }