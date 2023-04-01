require("dotenv").config();
require("./db/mongoose");
const express = require("express");
const cors = require("cors");

const app = express();
const userRoutes = require("./routes/user.route");
const personalRoutes = require("./routes/personal.route");
const symptomsRoutes = require("./routes/symptoms.route");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/user", userRoutes);
app.use("/api/personal", personalRoutes);
app.use("/api/symptoms", symptomsRoutes);

module.exports = app;
