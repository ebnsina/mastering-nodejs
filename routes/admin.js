const express = require('express');

const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next) => {
  res.render('add-product', {
    title: 'Admin - Add Product',
    path: '/admin/add-product'
  });
});

router.post('/product', (req, res, next) => {
  const { title } = req.body;
  products.push({ title });
  res.redirect('/');
});

module.exports.router = router;
module.exports.products = products;
