const express = require('express');
const router = express.Router();
const authenticateToken = require('../../middleware/authMiddleware')
const homeController = require('../../app/controllers/homeController');
const visitsController = require('../../app/controllers/visitsController');

router.post('/login', homeController.login);

router.get('/dashboard', authenticateToken, homeController.dashboard);

router.get('/visits', visitsController.recordVisit);


module.exports = router;
