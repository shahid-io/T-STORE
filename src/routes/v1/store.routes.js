const express = require('express');
/** controllers */
const { StoreController } = require('../../controllers');

const router = express.Router();

router.get('/', StoreController.getStores);

module.exports = router;
