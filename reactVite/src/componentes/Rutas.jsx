import { BrowserRouter as Router, Routes, Route, Link, NavLink, useParams, Outlet } from "react-router-dom";

export default function Rutas() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/usuarios" element={<MySkills/>} />
        <Route path="/usuarios/:nombre" element={<Domingo/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </Router>
  );
}

function Navbar() {
  // visible en cada página
  return <div>navbar</div>;
}
//Sólo se verá cuando en la ruta está en el comienzo con /
function Home() {
  return <div>home</div>;
}

//Caso de otra cosa
function MySkills() {
  return <div>SKILLS</div>;
}
function Domingo() {
  const params = useParams();
  let nombre=params.nombre;
  switch (nombre){
    case "domingo":
      return <h3>Parámetro introducido 👉️ {nombre}</h3>;break;
    case "juanfran":
      return <h3>Parámetro introducido 👉️ {nombre} </h3>; break;
  }
  
}

function MySkills2() {
  //Lectura del parámetro de la URL
  const params = useParams();
  return <h3>Parámetro introducido 👉️ {params.nombre}</h3>;
}

//Sólo se verá cuando en la ruta esta con /about, como si fuera una página diferente en otra carpeta del sitio
function About() {
  return <div>about</div>;
}

//Rutas con caso de error y con entrada de parámetros en URL
export function RutasConError() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/usuarios" element={<MySkills/>} />
        <Route path="/usuarios/:nombre" element={<MySkills2/>} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<NoPage/>} />
      </Routes>
    </Router>
  );
}

//Sólo se verá cuando en la ruta esta con error
function NoPage() {
  return <h3>Esta página no existe (ERROR 404)</h3>;
}

//Rutas a través de la barra de menú
export function RutasMenu() {
  return (
    <Router>
      <Navbar2 />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </Router>
  );
}
function Navbar2() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  )
}

function Navbar3() {
    // visible on every page
    return (
    <nav>
    <Link to="/">Home</Link>
    <Link to="usuario/Domingo">Usuarios</Link>
    <Link to="about">Acerca de...</Link>
    <Link to="otra">Otra...</Link>
    </nav>
    )
    }

    function Otra(){
    return(
    <div>Otra cosa</div>
    )
    }

export function RutaOutlet() {
    return (
    <Router>
    <Navbar3 />
    <Routes>
    <Route exact path="/" element={<Home2 />}>
        <Route path="usuario/:nombre" element={<MySkills />} />
        <Route path="/about" element={<About />} />
    </Route>
    <Route path="/otra" element={<Otra />} />
    <Route path="*" element={<NoPage/>} />
    </Routes>
    </Router>
    );
    }

    function Home2(){
        return(
            <div>
                <h1> HOME </h1>
                <Outlet />
            </div>
        )
    }