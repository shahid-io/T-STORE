const express = require("express");
const { TshirtController } = require("../../controllers");
const { AuthMiddleware } = require("../../middlewares");
const router = express.Router();

/**
 * /api/v1/user
 */

router.post("/", AuthMiddleware.verifyToken, TshirtController.addTshirt);
router.put("/:id", AuthMiddleware.verifyToken, TshirtController.updateTshirt);
router.get("/", TshirtController.getTshirts);
router.get("/:id", TshirtController.getTshirt);
router.get("/:slug", TshirtController.getTshirtBySlug);
router.get("/category", TshirtController.getAllTshirtsWithCategoryNames);
router.get("/category/:id", TshirtController.getAllTshirtsWithCategoryName);
module.exports = router;
