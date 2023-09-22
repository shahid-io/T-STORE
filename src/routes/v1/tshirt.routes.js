const express = require("express");
const { TshirtController } = require("../../controllers");
const { AuthMiddleware } = require("../../middlewares");
const router = express.Router();

/**
 * /api/v1/user
 */

router.post("/", AuthMiddleware.verifyToken, TshirtController.addTshirt);
router.get("/", TshirtController.getTshirts);
router.get(
  "/category",
  AuthMiddleware.verifyToken,
  TshirtController.getAllTshirtsWithCategoryNames
);
module.exports = router;
