import { BrowserRouter as Router, Route, Routes, useParams, Link, Outlet } from "react-router-dom";
export function RutaOutlet() {
  return (
    <Router>
      <Navbar />
      <Routes>
            <Route exact path="/" element={<Home/>}>
            	<Route path="usuario/:nombre" element={<MySkills/>} />
            	<Route path="/about" element={<About/>} />
	</Route>
            <Route path="*" element={<NoPage/>} />
      </Routes>
    </Router>
  );
}
function Navbar() {
  // visible on every page
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="usuario/Domingo">Usuarios</Link>
        <Link to="about">Acerca de...</Link>
    </nav>
  )
}

function Home() {
  return (
    <div>
        <h1> HOME </h1>
        <Outlet/>
    </div>
  )
}

function MySkills() {
    //Lectura del parámetro de la URL
    const params = useParams();
    return <h2>Parámetro introducido 👉️ {params.nombre}</h2>;
  }

function About() {
  return <div>about</div>;
}

function NoPage() {
    return <div>PÁGINA DE ERROR 404</div>;
}
  