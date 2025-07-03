import React, { useState } from 'react';
import axios from "axios"
import { Link } from 'react-router-dom';
import "./FormToRegisterUsers.css"
const FormToRegisterUsers = () => {

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [dni, setDni] = useState('');
    const [fechaDeIngreso, setFechaDeIngreso] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        // 1. Obtener la fecha y hora actual como un objeto Date
        const now = new Date();
        let dia = now.getDate()
        let mesMenosUno = now.getMonth()
        let año = now.getFullYear()

        let mes = mesMenosUno++
        const fecha = {
            dia,
            mes,
            año
        }
        console.log(dia, mes, año)

        setFechaDeIngreso(fecha);



        const nuevoUsuario = {
            nombre,
            apellido,
            email,
            dni: parseInt(dni, 10), // Convertir a número
            fechaDeIngreso
        };
        console.log(nuevoUsuario)

        try {
            const response = await axios.post('http://localhost:8080/api/users', nuevoUsuario);
            console.log(response.data);
            alert('Usuario creado: ' + JSON.stringify(response.data));
        } catch (error) {
            console.error('Error al crear usuario', error);
            alert('No se pudo crear el usuario');
        }
    };

    return (
        <>
            <div className='container-formulario-register'>
                <h2>Formulario para ingresar un nuevo cliente</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    /><br />

                    <input
                        type="text"
                        placeholder="Apellido"
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                    /><br />

                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    /><br />

                    <input
                        type="text"
                        placeholder="DNI"
                        value={dni}
                        onChange={(e) => setDni(e.target.value)}
                    /><br />

                    <button type="submit">Enviar</button>
                </form>
            </div>
        </>

    )
}

export default FormToRegisterUsers;