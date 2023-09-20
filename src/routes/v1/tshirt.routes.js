const express = require('express');
const { TshirtController } = require('../../controllers');
const router = express.Router();

/**
 * /api/v1/user
 */

router.post('/', TshirtController.addTshirt);
// router.post('/login');

module.exports = router;