import React from "react";
import { useEffect, useState } from "react";
import UserDetails from "../userDetail/userDetail";
import axios from "axios";

const FormToSearchUser =  () => {

    const [dni, setDni] = useState("")
    const [foundUser, setFoundUser] = useState(null)


    const searchUser = async (e) =>{
        e.preventDefault()
        try{

            const response = await axios.get(`http://localhost:8080/api/users/userByDni/${dni}`)
            console.log(response)
            if (Array.isArray(response.data) && response.data.length > 0) {
                setFoundUser(response.data[0]); // Toma el primer objeto del array
                console.log("Usuario encontrado (desde el array):", response.data[0]); // Para verificar
            } else {
                // Esto ocurriría si el backend devuelve un array vacío
                setError("Usuario no encontrado.");
                setFoundUser(null);
                console.log("Respuesta de la API no contiene datos de usuario.");
            }
            setDni("")
        }catch (error) {
            console.log(error + "a ocurrido un error")
        }
    }

    return (
        <>
            <UserDetails user={foundUser} />
            <div className="container">
            <form onSubmit={searchUser}>
                <input
                        type="text"
                        placeholder="DNI"
                        value={dni}
                        onChange={(e) => setDni(e.target.value)}/>
                        <button type="submit">Buscar</button>
            </form>
        </div>

        </>
    )





}


export default FormToSearchUser