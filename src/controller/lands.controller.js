// Import 
const Land = require("../models/lands.model");

const createLand = (req, res) => {
    try {
        const params = req.body;

        const land = new Land(params);
        land.save((err, data) => {
            if (err) throw err;

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
            mensaje: "No se ha guardado el terreno",
            error
        })
    }
};

const updateLandLoot = async (req, res) => {
    try {
        const params = req.body

        // Validar los valores de params 
        // Haciendo un .findById y ver que no sobrepasa el workers_max

        await Land.findOneAndUpdate({ _id: params.landId }, {
            $set: {
                loot: {
                    workers_current: params.quantity_workers,
                    workers_max: params.max_workers
                }
            }
        });
        return res.status(200).json({
            status: "success",
            mensaje: `Se ha actualizado la cantidad de trabajadores en tu Land a ${params.quantity_workers}`
        })
    } catch (error) {
        return res.status(400).json({
            status: "error",
            mensaje: "No se ha guardado el terreno",
            error
        })
    }
}

const updateLandUnit = async (req, res) => {
    try {
        const params = req.body

        // Validar los valores de params 
        // Haciendo un .findById y ver que no sobrepasa el workers_max

        //* Hay que hacer una comprobacion tambien de que el nivel del "training academy" permita crear esa unidad
        // Comprobar que tiene los suficientes recursos.
        Land.findOne({ "_id": params.landId }, (err, data) => {
            if (err) throw err;
            if (!!data) {
                const validar = {
                    money: parseInt(data.resources.money) - (parseInt(data.building.training_academy.units.homeless.money) * parseInt(params.quantity_unit)),
                    materials: parseInt(data.resources.materials) - (parseInt(data.building.training_academy.units.homeless.materials) * parseInt(params.quantity_unit)),
                    membership_available: parseInt(data.building.council.membership_available) - parseInt(params.quantity_unit)
                }
                // Solo comprueba que los materiales no sean menor de 0, asi que el dinero puede ser negativo
                if (validar.materials < 0 || validar.membership_available < 0) {
                    res.status(400).json({ mensaje: "No tienes suficientes recursos o suficientes aliados" });
                }
                // Tu Land TOTALMENTE actualizada { -resources -units -poblacion}
                const i_land = {
                    ...data._doc,
                    resources: {
                        ...data._doc.resources,
                        money: validar.money,
                        materials: validar.materials
                    },
                    units: {
                        ...data._doc.units,
                        homeless: {
                            ...data._doc.units.homeless,
                            quantity: parseInt(data._doc.units.homeless.quantity) + parseInt(params.quantity_unit)
                        }
                    },
                    building: {
                        ...data._doc.building,
                        council: {
                            ...data._doc.building.council,
                            membership_size: parseInt(data._doc.building.council.membership_size) - parseInt(params.quantity_unit),
                            membership_available: parseInt(data._doc.building.council.membership_available) - parseInt(params.quantity_unit)
                        }
                    }
                }
                // console.log(i_land);
                Land.findOneAndUpdate({ "_id": params.landId }, i_land, { new: true }, (err, data) => {
                    if (err) throw err;

                    return res.status(200).json({
                        status: "success",
                        mensaje: `Se ha actualizado resources, units y membership_available de tu Land correctamente`,
                        land: data
                    })
                });
            } else {
                return res.status(400).json({
                    status: "error",
                    mensaje: "El Land no existe",
                });
            }
        });

        // Actualiza la cantidad de unidades que tienes (homeless)
    } catch (error) {
        return res.status(400).json({
            status: "error",
            mensaje: "No se ha guardado el land al crear la unidad",
            error
        })
    }
}


// Export
module.exports = {
    createLand,
    updateLandLoot,
    updateLandUnit
}
