import express from "express"
import dotenv from "dotenv";
dotenv.config();
import cors from "cors"
import router from "./router/user.router.js"
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

// Agrega esta línea para interpretar el JSON
app.use(express.json());

//coneccion con la base de datos
mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Conectado a MongoDB"))
    .catch((error) => console.error("Error conectando a MongoDB:", error));


//para la coneccion cliente(frontend)==> servidor(backend)
app.use(cors())



app.use("/api/users",router);





app.listen(PORT, () =>{
    console.log("servidor corriendo en :", PORT)
})