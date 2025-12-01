const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

// All routes require auth and admin role
router.use(auth);
router.use(admin);

// Dashboard stats
router.get('/stats', adminController.getStats);

// Orders management
router.get('/orders', adminController.getAllOrders);
router.put('/orders/:id/status', adminController.updateOrderStatus);

// Users management
router.get('/users', adminController.getAllUsers);

module.exports = router;
