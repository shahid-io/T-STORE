const express = require('express');
const { AddressController } = require('../../controllers');
const { AuthMiddleware } = require('../../middlewares');
const router = express.Router();

/**
 * /api/v1/address
 */

router.post('/', AuthMiddleware.verifyToken, AddressController.addAddress);
router.get('/', AuthMiddleware.verifyToken, AddressController.getAddress);



module.exports = router;