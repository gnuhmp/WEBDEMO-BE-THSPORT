const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

router.post('/', auth, orderController.createOrder);
router.get('/', auth, orderController.getOrders);
router.get('/history', auth, orderController.getOrderHistory);
router.get('/:id', auth, orderController.getOrder);
router.put('/:id', auth, admin, orderController.updateOrder);
router.delete('/:id', auth, orderController.deleteOrder);

module.exports = router;
