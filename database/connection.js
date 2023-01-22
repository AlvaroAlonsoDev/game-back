const mongoose = require("mongoose");

const connection = async() => {
    mongoose.set('strictQuery', true)
    try {
        await mongoose.connect("mongodb+srv://policacos:xx7YMOYuZvogMk8V@cluster0.z8zu3dy.mongodb.net/?retryWrites=true&w=majority");
        console.log("Conectado correctamente a la base de datos");
    } catch (error) {
        console.log(error);
        throw new Error("Connect failed DB")
    }
}

module.exports = connection;