const express = require("express");
const mongoose = require("mongoose");
const compression = require("compression");
const Router = require("./router.js");
// const routes = require("./routes/userRoutes");
require("dotenv").config();

const mongoURI = process.env.DB_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};
connectDB();

const app = express();
app.use(express.json());
app.use(compression());
app.use("/api", Router);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Server is running on port", port));