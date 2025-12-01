const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

router.post('/', auth, admin, productController.createProduct);
router.get('/', productController.getProducts);
router.get('/xakho', productController.getXakhoProducts);
router.get('/slug/:slug', productController.getProductBySlug);
router.get('/:id', productController.getProduct);
router.put('/:identifier', auth, admin, productController.updateProduct);
router.delete('/:identifier', auth, admin, productController.deleteProduct);

module.exports = router;
