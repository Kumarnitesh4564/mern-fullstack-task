const express = require('express');
const router = express.Router();

const { protect } = require('../middleware/auth');
const upload = require('../middleware/upload');
const productController = require('../controllers/productController');

router.post('/', protect, upload.single('image'), productController.createProduct);
router.get('/', productController.getAllProducts);
router.put('/:id', protect, upload.single('image'), productController.updateProduct);
router.delete('/:id', protect, productController.deleteProduct);

module.exports = router;