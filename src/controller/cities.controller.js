// Import Models
const City = require("../models/cities.model");
const Land = require("../models/lands.model");


const createCity = async (req, res) => {
    try {
        // Recogemos params de la nueva ciudad
        const params = req.body;

        // Creamos la nueva City y la guardamos
        const city = new City(params);
        await city.save();

        // Creamos las 4 "lands"
        const lands = [];
        for (let i = 0; i < params.quantity; i++) {

            const land = new Land({
                city_id: city._id,
                position: i + 1,
            });
            lands.push(land)
        }
        // guardamos "lands" en la base de datos
        await Land.insertMany(lands);

        // Respondemos al front diciendo que todo esta okei
        res.status(201).json({
            city,
            lands,
            message: "Ciudad y Lands creadas con éxito",
        });
    } catch (error) {
        return res.status(400).json({
            status: "error",
            mensaje: "No se ha guardado el terreno"
        })
    }
}

// Export
module.exports = {
    createCity,
}