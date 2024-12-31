const express = require('express');
const router = express.Router();
const authenticateToken = require('../../middleware/authMiddleware')
const homeController = require('../../app/controllers/homeController');

router.get('/mirgate', authenticateToken, homeController.syncDB);

router.post('/login', homeController.login);

module.exports = router;
