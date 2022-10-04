const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = process.env.PORT || 5000;

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.set('view engine', 'ejs');

app.use(expressLayouts);
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use('/admin', adminData.router);
app.use(shopRoutes);

app.use('*', (req, res, next) => {
  res.status(404).render('404', { 'title': 'Page not found!'});
});

app.listen(port, () => {
  console.log(`Server listen on http://localhost:${port}`);
});
