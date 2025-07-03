import React from "react";
import "./enterUser.css"
import { useState, useEffect } from "react";
import axios from "axios"
import UserDetails from "../userDetail/userDetail";
const EnterUser = () => {

    const [dni, setDni] = useState("");
    const [foundUser, setFoundUser] = useState(null); // Estado para almacenar el usuario encontrado


    const TIMEOUT_DURATION = 4000; // 

    // Efecto para gestionar el temporizador cuando se encuentra un usuario
    useEffect(() => {
        let timer;

        if (foundUser) {
            // Si hay un usuario encontrado, inicia el temporizador
            timer = setTimeout(() => {
                console.log("Tiempo agotado, ocultando detalles del usuario.");
                handleBackToSearch(); // Llama a la función para volver al formulario
            }, TIMEOUT_DURATION);
        }

        // Función de limpieza para useEffect
        // Se ejecuta cuando el componente se desmonta o cuando las dependencias cambian
        return () => {
            if (timer) {
                clearTimeout(timer); // Limpia cualquier temporizador pendiente para evitar fugas de memoria
            }
        };
    }, [foundUser, TIMEOUT_DURATION]); // Dependencia: el efecto se ejecuta cuando foundUser o TIMEOUT_DURATION cambian



    const searchClient = async (e) => {
        e.preventDefault()

        try {

            const response = await axios.get(`http://localhost:8080/api/users/userByDni/${dni}`);
            if (Array.isArray(response.data) && response.data.length > 0) {
                setFoundUser(response.data[0]); // Toma el primer objeto del array
                console.log("Usuario encontrado (desde el array):", response.data[0]); // Para verificar
            } else {
                // Esto ocurriría si el backend devuelve un array vacío
                setError("Usuario no encontrado.");
                setFoundUser(null);
                console.log("Respuesta de la API no contiene datos de usuario.");
            }
            setDni(""); // Limpia el campo del DNI después de una búsqueda exitosa


        } catch (error) {
            console.log(error + "a ocurrido un error")
        }

    };
    const handleBackToSearch = () => {
        setFoundUser(null); // Oculta los detalles del usuario
        setDni("");         // Limpia el DNI
    }
    return (


        <>
            {foundUser ? (
                <>
                <h1>Usuario Verificado</h1>
                <UserDetails user={foundUser} />
</>
            ) : (
                <div className="container">
                    <h2 className="h2-dni">Introduzca su numero de documento para poder ingresar!</h2>

                    <form action="submit" className="form-container" onSubmit={searchClient}>
                        <input
                            type="number"
                            placeholder="Introduzca Su DNI"
                            onChange={(e) => setDni(e.target.value)}
                        />
                        <button type="submit" className="button-enviar">Enviar</button>

                    </form>
                </div>
            )}
        </>

    )
}

export default EnterUser

