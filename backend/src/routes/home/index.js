const express = require('express');
const router = express.Router();

const homeController = require('../../app/controllers/homeController');

router.get('/mirgate', homeController.syncDB);

router.post('/login', homeController.login);

module.exports = router;
