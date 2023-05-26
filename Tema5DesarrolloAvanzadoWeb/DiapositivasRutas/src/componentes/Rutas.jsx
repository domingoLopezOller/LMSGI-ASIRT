import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CarouselBootstrap from './CarouselBootstrap.jsx';
import IconosRedesSociales from './IconosRedesSociales.jsx';
import NavBar from './NavBar.jsx';
import Home from './Home.jsx';


export default function Rutas () {
    return (
      <BrowserRouter>
        <header>
            <NavBar/>
        </header>
        
        <main>
        <Routes>
          <Route exact path="/" element={<HomeR/>} />
            <Route path="/carousel" element={<Carousel/>} />
            <Route path="/redesSociales" element={<RedesSociales/>} />
              {/* <Route path="/rutas/productos/:nombre" element={<Procesador/>} />
              <Route path="/productos/:nombre" element={<Teclado/>} />
              <Route path="/productos/:nombre" element={<Ram/>} />
              <Route path="/productos/:nombre" element={<PlacaBase/>} />
              <Route path="/productos/:nombre" element={<Raton/>} /> */}
              <Route path="/curriculum/sobreMi" element={<SobreMi/>} />
              <Route path="/curriculum/aptitudes" element={<Aptitudes/>} />
              <Route path="/curriculum/formacionAcademica" element={<FormacionAcademica/>} />
              <Route path="/curriculum/formacionLaboral" element={<FormacionLaboral/>} />  
          <Route path="*" element={<NoPage/>} />
        </Routes>
        </main>
      </BrowserRouter>
    )
  }

  function HomeR() {
    return (
        <Home />
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
            <h1>Carousel bootstrap en React</h1>
            <p><strong>Actividad:</strong>Empleando Bootstrap haz un Carousel con imágenes de Andalucía que le indicas en un JSON como parámetro</p>
            <CarouselBootstrap andalucia={andalucia} />
        </div>
    );
  }

  function RedesSociales() {
    return (
        <IconosRedesSociales />
    );
  }

  function SobreMi() {
    return <div>Sobre Mi</div>;
  }

  function Aptitudes() {
    return <div>Aptitudes</div>;
  }

  function FormacionAcademica() {
    return <div>Formación Académica</div>;
  }

  function FormacionLaboral() {
    return <div>Formación Laboral</div>;
  }

  function NoPage() {
    return <div>Error 404</div>;
  }