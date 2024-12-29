const express = require("express");
const userRoutes = require("./routes/userRoutes");
const router = express.Router();

router.use("/users", userRoutes);

module.exports = router;