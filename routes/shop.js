const express = require('express');

const productController = require('../controllers/products');

const router = express.Router();

/**
 * GET /
 */
router.get('/', productController.getProducts);

module.exports = router;
