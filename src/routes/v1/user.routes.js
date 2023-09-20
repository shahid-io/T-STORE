const express = require('express');
const { UserController } = require('../../controllers');
const router = express.Router();

/**
 * /api/v1/user
 */

router.post('/signup', UserController.signup);
router.post('/login', UserController.login);

module.exports = router;