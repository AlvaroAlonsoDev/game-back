const { Schema, model } = require("mongoose");

const UserSchema = Schema({
    land_id: {
        type: String,
        default: false
    },
    username: {
        type: String,
        default: ""
    },
    first_name: {
        type: String,
        default: ""
    },
    last_name: {
        type: String,
        default: ""
    },
    complete_name: {
        type: String,
        default: ""
    },
    email: {
        type: String,
        required: true
    },
    profile_picture: {
        type: String,
        default: "https://res.cloudinary.com/dly3mgbyb/image/upload/v1674233163/policaconos/descargfewfa_sffpeg.jpg"
    },
    creation_date: {
        type: Date,
        default: Date.now()
    },
    last_conexion: {
        type: Date,
        default: Date.now()
    }
    
});

module.exports = model("User", UserSchema, "users"); 