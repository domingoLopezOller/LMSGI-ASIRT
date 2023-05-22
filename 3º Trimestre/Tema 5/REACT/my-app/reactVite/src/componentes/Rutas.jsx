import { BrowserRouter as Router, Route, Routes, NavLink, Outlet, useParams } from
"react-router-dom";

// Componente Rutas
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
// visible en cada página
return <div>navbar</div>;
}

//Sólo se verá al principio con /
function Home() {
return (
    <div>
        <header>
            <h1>Hola a todos</h1>
        </header>
        <body>
            <h2>Estudios:</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta itaque optio odio explicabo 
                eum temporibus deleniti minima laudantium repudiandae, cupiditate rem perferendis consectetur. 
                Porro vero omnis adipisci reprehenderit at eius?
            </p>
        </body>

    </div>
)
}

//Sólo se verá con /about en la URL
function About() {
return <div>about</div>;
}

function MySkills() {
    return (
    <h3>YO SEPO ABLAR CASTEYANO</h3>
    )
}

//Pagina 404
function NoPage() {
    return <h2>La página que has solicitado no existe</h2>;
}

// Componente RutasMenu
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

function Otra(){
    return (
        <h2>esto es otra cosa</h2>
    )
}
function Navbar2() {
    return (
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
    </nav>
    )
}

export function RutaOutlet() {
    return (
    <Router>
        <Navbar3 />
        <Routes>
            <Route exact path="/" element={<Home2/>}>
                <Route path="usuario/:nombre" element={<MySkills/>} />
                <Route path="/about" element={<About/>} />
            </Route>
            <Route path="/otra" element={<Otra/>} />
            <Route path="*" element={<NoPage/>} />
        </Routes>
    </Router>
    );
    }
    function Navbar3() {
    // visible on every page
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="usuario/Domingo">Usuarios</NavLink>
            <NavLink to="about">Acerca de...</NavLink>
            <NavLink to="/otra">Otra</NavLink>
        </nav>
    )
    }

function Home2() {
    return (
    <div>
        <h1> HOME </h1>
        <Outlet/>
    </div>
    )
}