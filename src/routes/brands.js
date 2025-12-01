const express = require('express');
const router = express.Router();
const brandController = require('../controllers/brandController');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

router.post('/', auth, admin, brandController.createBrand);
router.get('/', brandController.getBrands);
router.put('/:id', auth, admin, brandController.updateBrand);
router.delete('/:id', auth, admin, brandController.deleteBrand);

module.exports = router;
