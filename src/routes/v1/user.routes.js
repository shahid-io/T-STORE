const express = require("express");
const { UserController } = require("../../controllers");
const { AuthMiddleware } = require("../../middlewares");
const router = express.Router();

/**
 * /api/v1/user
 */
router.post("/signup", UserController.signup);
router.post("/login", UserController.login);
router.put("/setting", AuthMiddleware.verifyToken, UserController.updateUser);

module.exports = router;
