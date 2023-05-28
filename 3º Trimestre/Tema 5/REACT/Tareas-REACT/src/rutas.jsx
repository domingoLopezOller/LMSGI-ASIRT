import { BrowserRouter as Router, Route, Routes, NavLink, Outlet, useParams } from
"react-router-dom";

// Componente Rutas
export default function Rutas() {
    return (
    <Router>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>} />
    <Route path="*" element={<NoPage/>}/>
    <Route path="/hardware/ram" element={<Ram/>} />
    <Route path="/hardware/ram" element={<CPU/>} />
    <Route path="/hardware/ram" element={<Torre/>} />
    <Route path="/hardware/ram" element={<Placa/>} />
    <Route path="/hardware/ram" element={<Teclado/>} />
    </Routes>
    </Router>
    );
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
function About() {
    return (
    <div>
        <h2>Juan Francisco Fabrega Martinez</h2>
        <p>Estudiante de ASIR</p>
    </div>
    )
    }

    function Ram() {
        <div>
            <h2>RAM</h2>
            <p>La memoria de acceso aleatorio (Random Access Memory, RAM) es una memoria de almacenamiento a corto plazo.
                 El sistema operativo de ordenadores u otros dispositivos utiliza la memoria RAM para almacenar de forma temporal 
                 todos los programas y sus procesos de ejecución.</p>
        </div>
    }
    function CPU() {
        <div>
            <h2>CPU</h2>
            <p>La unidad central de procesamiento (conocida por las siglas CPU, del inglés Central Processing Unit) o procesador es un 
                componente del hardware dentro de un ordenador, teléfonos inteligentes, y otros dispositivos programables.</p>
        </div>
    }
    function Placa() {
        <div>
            <h2>Placa Base</h2>
            <p>La placa base, también conocida como tarjeta madre, placa madre o placa principal (motherboard o mainboard en inglés),
                 es una tarjeta de circuito impreso a la que se conectan los componentes que constituyen la computadora. En muchos lugares
                  de habla hispana se usa la palabra inglesa con el artículo en femenino.</p>
        </div>
    }
    function Torre() {
        <div>
            <h2>Tore</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium obcaecati, sapiente ipsa rerum non esse optio laborum 
                reprehenderit at libero aperiam commodi vero ratione voluptates architecto necessitatibus magnam amet adipisci.</p>
        </div>
    }
    function Teclado() {
        <div>
            <h2>Teclado</h2>
            <p>En informática, un teclado es un dispositivo de entrada, en parte inspirado en el teclado de las máquinas de escribir, 
                que utiliza un sistema de puntadas o márgenes, para que actúen como palancas mecánicas o interruptores electrónicos que 
                envían toda la información a la computadora o al teléfono móvil.</p>
        </div>
    }
//Pagina 404
function NoPage() {
    return <h2>La página que has solicitado no existe: ERROR 404</h2>;
}