const express = require("express");
const storeRoutes = require("./store");


const router = express.Router();

router.use("/store", storeRoutes);

module.exports = router;