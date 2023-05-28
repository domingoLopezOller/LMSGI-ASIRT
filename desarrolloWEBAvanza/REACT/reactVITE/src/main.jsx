import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import { Web } from './componentes/Web.jsx'
import { ReactAvanzado } from './componentes/ReactAvanzado.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Web/> */}
    <ReactAvanzado/>
  </React.StrictMode>
)
