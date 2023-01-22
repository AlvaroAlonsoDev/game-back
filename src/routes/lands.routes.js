// import
const express = require("express");
const router = express.Router();

const LandsController = require("../controller/lands.controller");





// All get petitions
// router.get('/checkuser/:email', userController.checkUser)


// All post petitions
router.post('/create', LandsController.createLand)


// All put petitions
router.put('/update/loot', LandsController.updateLandLoot)
    .put('/update/unit/homeless', LandsController.updateLandUnit)







module.exports = router;