import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useEffect } from "react"
import axios from "axios"

import { useState } from "react"

import "./App.css"

import EnterUser from '../components/enterUser/enterUser';
import AdminCenter from '../components/adminCenter/adminCenter';  
import FormToRegisterUsers from '../components/formToRegisterUsers/formToRegisterUsers';
import FormToSearchUser from '../components/formToSearchUser/formToSearchUser';
const App = () => {

  return (

    <>
    
      <Router>
        <nav className='container-nav'>
        <ul className='container-links'>
          <li ><Link className='links' to="/">Inicio</Link></li>
          <li ><Link className='links' to="/admin">Formulario de Registro</Link></li>
          <li ><Link  className='links' to="/client">Buscar Cliente</Link></li>
        </ul>
      </nav>
        <Routes>
          <Route path="/" element={
            <div className='container-inicio'>
              <h1>Bienvenido a la aplicación</h1>
              <p>Usa la navegación para ir a las secciones.</p>
            </div>
          }
        />
        
          
          <Route path="/admin" element={<AdminCenter />}>
            <Route index element={<>
              </>
            } /> {/* Ruta por defecto para /admin */}
            <Route path="register" element={<FormToRegisterUsers/>} />
            <Route path="search" element={<FormToSearchUser/>} />  
        </Route>
          <Route path="/client" element={<EnterUser />}/>
        </Routes>

      </Router>
    </>
  )

}



export default App
