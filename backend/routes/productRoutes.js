const express = require('express');
const router = express.Router();

const { protect } = require('../middleware/auth');
const upload = require('../middleware/upload');
const productController = require('../controllers/productController');

// CREATE
router.post('/', protect, upload.single('image'), productController.createProduct);

// GET
router.get('/', productController.getAllProducts);

// DELETE
router.delete('/:id', protect, productController.deleteProduct);

module.exports = router;