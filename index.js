//importar 
const connection = require("./database/connection");
const dotenv = require("dotenv");
const app = require("./src/server");
require('./src/controller/cron.controller')


// Mensaje de bienvenida
console.log("Servidor de node creado!");

// Config dotenv
dotenv.config();

// Conexion a la DB
connection();


// Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log("Estoy escuchando en el puerto " + process.env.PORT);
})