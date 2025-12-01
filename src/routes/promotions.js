const express = require('express');
const router = express.Router();
const promotionController = require('../controllers/promotionController');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

router.post('/', auth, admin, promotionController.createPromotion);
router.get('/', promotionController.getPromotions);
router.put('/:id', auth, admin, promotionController.updatePromotion);
router.delete('/:id', auth, admin, promotionController.deletePromotion);

module.exports = router;
