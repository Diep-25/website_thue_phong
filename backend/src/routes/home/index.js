const express = require('express');
const router = express.Router();
const authenticateToken = require('../../middleware/authMiddleware')
const homeController = require('../../app/controllers/homeController');
const visitsController = require('../../app/controllers/visitsController');

router.get('/mirgate', authenticateToken, homeController.syncDB);

router.post('/login', homeController.login);

router.get('/visits', visitsController.recordVisit);

module.exports = router;
