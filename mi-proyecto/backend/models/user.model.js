import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    
    nombre: {
        type: String,
        required: true,
    },
    
    apellido: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    dni: {
        type: Number,
        required: true,
        unique: true, 
    },
    fechaDeIngreso: {
        dia: {
            type: Number,

        },
        mesActualizado: {
            type: Number,

        },
        año: {
            type: Number,

        }
    },
    valorSeleccionado:{
        type: String,

        required: true,
    }

});

const userModel = mongoose.model("users", userSchema);

export default userModel;