const cors = require("cors");
const express = require("express");
const userRouter = require("./routes/users.routes");
const LandRouter = require("./routes/lands.routes");
const CityRouter = require("./routes/cities.routes");

// Crear servidor node
const app = express();

// Config cors
app.use(cors());

// Convertir body a obj js
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Load all ROUTES
app.use("/api/user", userRouter);
app.use("/api/land", LandRouter);
app.use("/api/city", CityRouter);



module.exports = app;
