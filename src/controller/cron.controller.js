// Import node-cron
const cron = require('node-cron');


// Import models
const User = require("../models/users.model");
const City = require("../models/cities.model");
const Land = require("../models/lands.model");


const updateAllLands = () => {
    try {
        Land.find({}, (err, lands) => {
            if (err) throw err;

            //iterar sobre cada Land y actualizar sus recursos
            lands.forEach(land => {
                if (!!land.loot.workers_current) {
                    const workers = parseInt(land.loot.workers_current);
                    const resources_materials = parseInt(land.resources.materials);
                    const resources_money = parseInt(land.resources.money);
                    const membership_available = parseInt(land.building.council.membership_available);
                    const membership_size = parseInt(land.building.council.membership_size);
                    const membership_max_size = parseInt(land.building.council.membership_max_size);
                    const membership_growth = parseInt(land.building.council.membership_growth);

                    // Validad que workers no supera el max

                    const i_land = {
                        ...land._doc,
                        resources: {
                            ...land._doc.resources,
                            materials: resources_materials + workers,
                            money: resources_money + membership_available
                        },
                        building: {
                            ...land._doc.building,
                            council: {
                                ...land._doc.building.council,
                                membership_size: membership_max_size > membership_size ? membership_size + 1 : membership_size,
                                membership_available: membership_max_size > membership_size ? membership_available + 1 : membership_available
                            }
                        }
                    };
                    // console.log(i_land);
                    Land.findOneAndUpdate({ "_id": i_land._id }, i_land, { new: true }, (err, data) => { if (err) throw err });

                    // land.save();
                    console.log(`Se ha actualizado Land con id ${i_land._id}`);
                }
            });
        })
    } catch (error) {
        return res.status(400).json({
            status: "error",
            mensaje: "No se ha actualizado las lands",
            error
        })
    }
}



// programar una tarea para ejecutarse cada minuto
cron.schedule('* * * * *', () => {
    updateAllLands();
});

//cada 30 segundos
// cron.schedule('*/10 * * * * *', () => {
//     updateAllLands();
// });










