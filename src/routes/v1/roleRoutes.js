const express = require('express');
const roleController = require('../../controllers/v1/roleController');
const authMiddleware = require('../../middlewares/authMiddleware');
const roleMiddleware = require('../../middlewares/roleMiddleware');

const router = express.Router();

// Role management routes
router.get('/', authMiddleware, roleMiddleware(['Admin']), roleController.getAllRoles);
router.post('/', authMiddleware, roleMiddleware(['Admin']), roleController.createRole);

module.exports = router;
