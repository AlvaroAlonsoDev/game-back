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
    loot: {
        type: Object,
        default: {
            level: 1,
            level_requirements: {
                materials: 500,
                armaments: 500
            },
            workers_current: 0,
            workers_max: 10
        }
    },
    units: {
        type: Object,
        default: {
            homeless: {
                quantity: 0,
                stats: {
                    life: 10,
                    attack: 1,
                    defense: 1
                },
                requirements: 1
            },
            mercenary: {
                quantity: 0,
                stats: {
                    life: 20,
                    attack: 2,
                    defense: 2
                },
                requirements: 2
            },
            agent: {
                quantity: 0,
                stats: {
                    life: 30,
                    attack: 3,
                    defense: 3
                },
                requirements: 3
            }
        }
    },
    building: {
        level: 1,
        level_requirements: {
            materials: 500,
            armaments: 500
        },
        level_time: 60000,
        type: Object,
        default: {
            council: {
                level: 1,
                level_requirements: {
                    materials: 500,
                    armaments: 500
                },
                level_time: 60000,
                membership_size: 10,
                membership_available: 10,
                membership_max_size: 20,
                membership_growth: 1,
                money_growth: 100,
            },
            university: {
                level: 1,
                level_requirements: {
                    materials: 500,
                    armaments: 500
                },
                level_time: 60000,
                students_current: 0,
                students_max: 0,
            },
            training_academy: {
                level: 1,
                level_requirements: {
                    materials: 500,
                    armaments: 500
                },
                level_time: 60000,
                units: {
                    homeless: {
                        money: 25,
                        materials: 50
                    },
                    mercenary: {
                        money: 50,
                        materials: 75,
                        armaments: 25
                    },
                    agent: {
                        money: 75,
                        materials: 100,
                        armaments: 50
                    }
                }
            },
            warehouse: {
                level: 1,
                level_requirements: {
                    materials: 500,
                    armaments: 500
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
                    materials: 500,
                    armaments: 500
                },
                level_time: 60000,
                distance: 1
            },
            garage: {
                level: 1,
                level_requirements: {
                    materials: 500,
                    armaments: 500
                },
                level_time: 60000,
                vehicles: {
                    vehicles_type_1: {},
                    vehicles_type_2: {},
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