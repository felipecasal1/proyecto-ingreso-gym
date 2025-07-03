import { Router } from "express";
import userModel from "../models/user.model.js";
const router = Router()


// traer todos los  usuarios
router.get("/", async (req,res) =>{
    try{

        const users = await userModel.find().lean()
        res.json(users)
    } catch(error){
        console.error(error)
    }
})

router.post("/", async (req,res) =>{
    try{

        const users = await userModel.create(req.body)
        res.json(users)
    } catch(error){
    console.log(error)
}
})

//Busqueda por DNi de usuario 
router.get("/userByDni/:dni", async (req,res) =>{
    const { dni } = req.params;
    const dniNumerico = Number(dni);
    console.log(dniNumerico)
    try{
        const userByDni =await userModel.find({dni: dniNumerico}).lean()

        if (!userByDni) {
      // Si no se encuentra ningún usuario con ese DNI
    return res.status(404).json({ message: 'Usuario no encontrado.' })
    ;
    }else{
    
    res.status(200).json(userByDni);
    }

    }catch(error){
    console.error('Error al buscar usuario por DNI:', error);
    res.status(500).json({ message: 'Error interno del servidor.', error: error.message });
    }
})

// Ruta que recibe el formulario
router.post('/frontend', async (req, res) => {
    
    try {
        let { nombre, apellido, email, dni , fechaDeIngreso} = req.body;
        // Convertir dni a número
        console.log("Datos recibidos:", req.body);

        

        console.log("fecha :",fechaDeIngreso)

        const nuevoUsuario = { 
            nombre, 
            apellido, 
            email, 
            dni: Number(dni),
            fechaDeIngreso

        };
        let usuarioGuardado = await userModel.create(nuevoUsuario);
        res.status(201).json(usuarioGuardado);

    } catch (error) {
        console.error("Se ha producido un error agregando este usuario desde el frontend", error);
        res.status(500).json({ error: "Error al crear el usuario", error});
    }
});

export default router