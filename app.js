const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = process.env.PORT || 5000;

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController = require('./controllers/error')

app.set('view engine', 'ejs');

app.use(expressLayouts);
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use('*', errorController.get404);

app.listen(port, () => {
  console.log(`Server listen on http://localhost:${port}`);
});
