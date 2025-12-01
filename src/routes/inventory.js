const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

router.get('/:productId', inventoryController.getInventory);
router.put('/:productId', auth, admin, inventoryController.updateInventory);
router.post('/', auth, admin, inventoryController.createInventory);

module.exports = router;
