const express = require('express');
const userController = require('../../controllers/v1/userController');
const authMiddleware = require('../../middlewares/authMiddleware');
const roleMiddleware = require('../../middlewares/roleMiddleware');

const router = express.Router();

// User management routes
router.get('/', authMiddleware, roleMiddleware(['Admin']), userController.getAllUsers);
router.get('/:id', authMiddleware, userController.getUserById);
router.put('/:id', authMiddleware, roleMiddleware(['Admin', 'Moderator']), userController.updateUser);
router.delete('/:id', authMiddleware, roleMiddleware(['Admin']), userController.deleteUser);

module.exports = router;
