import React from 'react'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import './main.css'
export const Main2 = () => {
  return (
    <main>
        <Router>
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="usuario/:nombre" element={<MySkills/>} />
            <Route path="/about" element={<About/>} />
        </Routes>
        </Router>
    </main>
  )
}


function Home() {
    return <div>home</div>;
  }
  
  //Caso de otra cosa
  function MySkills() {
    return <div>SKILLS</div>;
  }

  function About() {
    return <div>About</div>;
  }