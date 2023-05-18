import { BrowserRouter as Router, Route, Routes } from
"react-router-dom";
export default function Rutas() {
return (
<Router>
<Navbar />
<Routes>
<Route exact path="/" element={<Home/>} />
<Route path="/about" element={<About/>} />
<Route path="/usuario/:nombre" element={<MySkills/>} />
<Route path="/admin/:nombre" element={<Yo/>}/>
</Routes>
</Router>
);
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
function About() {
return <div>about</div>;
}
function Yo() {
    return <h2>JF</h2>;
}
function MySkills() {
    //Lectura del parámetro de la URL
    const params = useParams();
    switch (nombre) {
        case "JF":
            return <h3>Parametro introducido: {nombre}</h3>;break;
        case "Sasha":
            return <h3>Parametro introducido: {nombre}</h3>;break;
    }
    }