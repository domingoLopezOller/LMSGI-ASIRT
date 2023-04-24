import { BrowserRouter as Router, Route, Routes, useParams, Link } from "react-router-dom";

export default function Rutas() {
  return (
    <Router>
      <Navbar />
      <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/usuario/:nombre" element={<MySkills/>} />
            <Route path="/about" element={<About/>} />
            <Route path="*" element={<NoPage/>} />
      </Routes>
    </Router>
  );
}

function Navbar() {
  // visible on every page
  return <div>navbar</div>;
}

function Home() {
  return <div>home</div>;
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
  