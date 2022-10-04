const express = require('express');

const productController = require('../controllers/products');

const router = express.Router();

/**
 * GET /admin/add-product
 */
router.get('/add-product', productController.getAddProduct);

/**
 * POST /admin/product
 */
router.post('/product', productController.postAddProduct);

module.exports = router;
