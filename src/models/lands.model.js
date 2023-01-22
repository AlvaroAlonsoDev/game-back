const { Schema, model } = require("mongoose");

const LandSchema = Schema({
    user_id: {
        type: String,
        default: ''
    },
    city_id: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    name_land: {
        type: String,
        default: ""
    },
    name_syndicate: {
        type: String,
        default: ""
    },
    knowledge_points: {
        type: String,
        default: 0
    },
    syndicate_picture: {
        type: String,
        default: "https://res.cloudinary.com/dly3mgbyb/image/upload/v1674304119/policaconos/1590540_1476106552734_full_pnkwpc.jpg"
    },
    vehicles: {
        type: Array,
        default: []
    },
    resources: {
        type: Object,
        default: {
            money: 1000,
            materials: 100,
            armaments: 100
        }
    },
    building: {
        type: Object,
        default: {
            council: {
                level: 1,
                level_requirements: {
                    materials:500,
                    armaments:500
                },
                level_time: 60000,
                Membership_size: 10,
                Membership_max_size: 20,
                Membership_growth: 1,
                Money_growth: 100,
            },
            university: {
                level: 1,
                level_requirements: {
                    materials:500,
                    armaments:500
                },
                level_time: 60000,
                students_current: 0,
                students_max: 0,
            },
            training_academy: {
                level: 1,
                level_requirements: {
                    materials:500,
                    armaments:500
                },
                level_time: 60000,
                units: {
                    level_1_requirements: {},
                    level_2_requirements: {},
                    level_3_requirements: {}
                }
            },
            warehouse: {
                level: 1,
                level_requirements: {
                    materials:500,
                    armaments:500
                },
                level_time: 60000,
                safe_materials: {
                    materials: 10,
                    armaments: 10
                }
            },
            shop: {
                level: 1,
                level_requirements: {
                    materials:500,
                    armaments:500
                },
                level_time: 60000,
                distance: 1
            },
            taller: {
                level: 1,
                level_requirements: {
                    materials:500,
                    armaments:500
                },
                level_time: 60000,
                vehicles : {
                    vehicles_type_1:{},
                    vehicles_type_2:{},
                }
            }
        }
    },
    creation_date: {
        type: Date,
        default: Date.now()
    }

});

module.exports = model("Land", LandSchema, "lands"); 