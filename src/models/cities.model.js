const { Schema, model } = require("mongoose");

const CitySchema = Schema({
    user_id: {
        type: String,
        default: ''
    },
    name_city: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    profile_picture: {
        type: String,
        default: "https://res.cloudinary.com/dly3mgbyb/image/upload/v1674376276/policaconos/1064455_aifwdw.png"
    },
    creation_date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = model("City", CitySchema, "cities"); 