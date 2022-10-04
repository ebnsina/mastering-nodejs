const express = require('express');

const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('shop', {
    title: 'My Shop',
    path: '/',
    products: adminData.products,
  });
});

module.exports = router;
