const express = require("express");
const { CategoryController } = require("../../controllers");
const { AuthMiddleware } = require("../../middlewares");
const router = express.Router();

/**
 * /api/v1/category
 */

router.post("/", AuthMiddleware.verifyToken, CategoryController.addCategory);
router.get("/", CategoryController.getCategories);
router.get("/:id", CategoryController.getCategory);
module.exports = router;
