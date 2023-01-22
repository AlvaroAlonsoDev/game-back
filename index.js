//importar 
const connection = require("./database/connection");
const dotenv = require("dotenv");
const app = require("./src/server");


// Mensaje de bienvenida
console.log("Servidor de node creado!");

// Config dotenv
dotenv.config();

// Conexion a la DB
connection();




// Escuchar peticiones
app.listen(4000, () => {
    console.log("Estoy escuchando en el puerto " + process.env.PORT);
})