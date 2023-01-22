// Import 
const User = require("../models/users.model");
const Land = require("../models/lands.model");

const checkUser = (req, res) => {
    const params = req.params;

    User.find({ email: params.email }, (error, data) => {
        if(err) throw err;

        if (!!data.length) {
            console.log('El usuario existe en la ddbb');
            return res.status(200).json({
                status: "success",
                info: data,
                mensaje: "En la consola esta la lista pisha!!"
            })
        } else {
            console.log('El usuario no existe en la ddbb');
            return res.status(200).json({
                status: "success",
                info: false,
                mensaje: "Ese email no esta en la bbdd"
            })
        }
    })
}

const createUser = (req, res) => {
    try {
        // recogemos los params del body
        const params = req.body;

        // validamos datos (con la funcion que tenemos en la carpeta helper)

        // Creamos el objeto a guardar
        const $user = new User(params)

        // guardar el articulo en la ddbb
        $user.save((err, data) => {
            if(err) throw err;

            //devolver el post
            return res.status(200).json({
                status: "success",
                info: data,
                mensaje: "El usuario ha sido creado"
            })
        })
    } catch (error) {
        return res.status(400).json({
            status: "error",
            mensaje: "No se ha guardado el post",
            error
        })
    }
}

const choiceLand = async (req, res) => {
    try {
        // Recogemos params
        const params = req.body;
    
        // Actualizamos user
        await User.findOneAndUpdate({ _id: params.userId }, {
            $set: { land_id: params.landId }
        });
    
        // Actualizamos Land
        await Land.findOneAndUpdate({ _id: params.landId }, {
            $set: { user_id: params.userId }
        });
    
        res.status(200).json({
            message: "Usuario y Land actualizados con éxito",
        });
    } catch (error) {
        return res.status(400).json({
            status: "error",
            mensaje: "No se ha guardado el post",
            error
        })
    }
}


// Export
module.exports = {
    checkUser,
    createUser,
    choiceLand
}
