
import { BrowserRouter as Router, Route, Routes } from
"react-router-dom";


export default function Rutas() {
    return (
    <Router>
    <Navbar />
    <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route path="/:nombre" element={<MySkills/>} />
    <Route path="/:nombre/:nombre" element={<MySkills2/>} />
    <Route path="/:nombre/:nombre" element={<MySkills3/>} />
    <Route path="/about" element={<About/>} />
    </Routes>
    </Router>
    );
   }

   function Navbar(2) {
    return (
    <nav>
    <Link to="/">este error no existe</Link>
    <Link to="/about">about</Link>
    </nav>
    )
   }
   

   function Navbar() {
    // visible en cada página
    return <div>navbar</div>;
   }
   //Sólo se verá al principio con /
   function Home() {
    return <div>home</div>;
   }
   //Sólo se verá con /about en la URL
   function MySkills() {
    return <div>skill</div>;
   }
   
   function MySkills3() {
    //Lectura del parámetro de la URL
    const params = useParams();
    return <h2>Parámetro introducido {params.nombre}</h2>; Emojis: https://emojipedia.org/es/
   }


   function MySkills2() {
    return <div>kevin</div>;
   }
   