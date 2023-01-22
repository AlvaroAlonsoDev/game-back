// import
const express = require("express");
const router = express.Router();

const userController = require("../controller/users.controllers")



// All get petitions
router.get('/checkuser/:email', userController.checkUser)



// All post petitions
router.post('/createuser', userController.createUser)

// All put petitions
router.put('/choiceland', userController.choiceLand)

module.exports = router;