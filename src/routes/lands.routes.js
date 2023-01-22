// import
const express = require("express");
const router = express.Router();

const LandsController = require("../controller/lands.controller")






// router.get('/checkuser/:email', userController.checkUser)

router.post('/create', LandsController.createLand)







module.exports = router;