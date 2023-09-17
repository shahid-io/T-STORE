const express = require("express");
const userRoutes = require("./user.routes");

const router = express.Router();

/**
 * /api/v1/user
 */
router.use("/user", userRoutes);

module.exports = router;