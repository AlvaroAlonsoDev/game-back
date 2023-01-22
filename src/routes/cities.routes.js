// import
const express = require("express");
const router = express.Router();

const CityController = require("../controller/cities.controller");





// router.get('/checkuser/:email', userController.checkUser)

router.post('/create', CityController.createCity)








module.exports = router;