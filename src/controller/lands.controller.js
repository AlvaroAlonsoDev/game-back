// Import 
const Land = require("../models/lands.model");

const createLand = (req, res) => {
    try {
        const params = req.body;

        const land = new Land(params);
        land.save((error, data) => {
            if (error || !data) {
                return res.status(400).json({
                    status: "error",
                    mensaje: "No se ha guardado el terreno"
                })
            }
            //devolver el post
            return res.status(200).json({
                status: "success",
                info: data,
                mensaje: "El terreno ha sido creado"
            })
        })
    } catch (error) {
        return res.status(400).json({
            status: "error",
            mensaje: "No se ha guardado el terreno"
        })
    }
}



// Export
module.exports = {
    createLand
}
