import React from "react";
import "./userDetail.css"

const UserDetails = ({ user}) => {
    if (!user) {
        return null; // No renderiza nada si no hay usuario
    }

    return (
        <div className="user-details-container">
            <p className="atributos-container"><strong>Nombre:</strong> {user.nombre}</p>
            <p className="atributos-container"><strong>Apellido:</strong> {user.apellido}</p>
            <p className="atributos-container"><strong>Email:</strong> {user.email}</p>
            <p className="atributos-container"><strong>DNI:</strong> {user.dni}</p>
        
        </div>
    );
};

export default UserDetails