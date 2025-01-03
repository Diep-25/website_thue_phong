const express = require('express');
const router = express.Router();
const authenticateToken = require('../../middleware/authMiddleware')
const orderController = require('../../app/controllers/orderController');

router.post('/insert', orderController.insert);

router.get('/', authenticateToken, orderController.index);

module.exports = router;
