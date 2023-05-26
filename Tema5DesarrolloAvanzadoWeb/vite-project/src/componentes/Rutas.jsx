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
            {/* <Route path="/rutas" element={<Rutas/>} />
              <Route path="/rutas/productos/:nombre" element={<Procesador/>} />
              <Route path="/rutas/productos/:nombre" element={<Teclado/>} />
              <Route path="/rutas/productos/:nombre" element={<Ram/>} />
              <Route path="/rutas/productos/:nombre" element={<PlacaBase/>} />
              <Route path="/rutas/productos/:nombre" element={<Raton/>} />
              <Route path="/rutas/curriculum" element={<Curriculum/>} />
              <Route path="/rutas/curriculum/sobreMi" element={<SobreMi/>} />
              <Route path="/rutas/curriculum/aptitudes" element={<Aptitudes/>} />
              <Route path="/rutas/curriculum/formacionAcademica" element={<FormacionAcademica/>} />
              <Route path="/rutas/curriculum/formacionProfesional" element={<FormacionProfesional/>} /> */}
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
        <CarouselBootstrap andalucia={andalucia} />
    );
  }

  function RedesSociales() {
    return (
        <IconosRedesSociales />
    );
  }

  function NoPage() {
    return <div>Error 404</div>;
  }