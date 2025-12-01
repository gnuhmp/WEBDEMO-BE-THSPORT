const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

router.put('/:id', auth, userController.updateUser);
router.delete('/:id', auth, admin, userController.deleteUser);
router.get('/', auth, admin, userController.listUsers);

module.exports = router;
