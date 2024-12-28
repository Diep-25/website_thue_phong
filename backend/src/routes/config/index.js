const express = require('express');
const router = express.Router();
const authenticateToken = require('../../middleware/authMiddleware')
const configController = require('../../app/controllers/configController');

router.get('/edit/:id', configController.edit);

router.put('/update/:id', configController.update);

router.get('/', configController.index);

module.exports = router;
