const express = require('express');
const router = express.Router();
const orderController = require('../../app/controllers/orderController');

router.post('/insert', orderController.insert);

router.get('/', orderController.index);

module.exports = router;
