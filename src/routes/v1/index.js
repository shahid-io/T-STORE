const express = require("express");
const userRoutes = require("./user.routes");
const tshirtRoutes = require("./tshirt.routes");
const categoryRoutes = require("./category.routes");
const addressRoutes = require("./address.routes");
const router = express.Router();
/**
 * /api/v1/user
 */
router.use("/user", userRoutes);


/**
 * /api/v1/tshirt
 */
router.use("/tshirt", tshirtRoutes)


/**
 * /api/v1/category
 */
router.use("/category", categoryRoutes)


/**
 * /api/v1/address
 */
router.use("/address", addressRoutes)


module.exports = router;