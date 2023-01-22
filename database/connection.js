const mongoose = require("mongoose");

const connection = async() => {
    mongoose.set('strictQuery', true)
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Conectado correctamente a la base de datos");
    } catch (error) {
        console.log(error);
        throw new Error("Connect failed DB")
    }
}

module.exports = connection;