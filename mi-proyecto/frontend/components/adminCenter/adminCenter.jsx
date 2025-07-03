import React from "react";
import "./adminCenter.css"
import { Link, Routes, Router, Route, Outlet} from "react-router-dom";
const AdminCenter = () =>{


    return(
        <>
        <div className="container-links-admin-center">
            
        <Link  className="links-adminCenter" to="register">Agregar Nuevos Usuarios</Link>
        <Link className="links-adminCenter"to="search">Buscar un Usuario</Link>
        
        </div>
        <Outlet />

    
        </>
    )
}

export default AdminCenter