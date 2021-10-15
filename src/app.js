const express = require('express');
const path = require('path');
const methodOverride = require('method-override');

const app = express();

// Middlewares

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(methodOverride('_method'));

// Template Engine

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

// Routes

const mainRouter = require('./routes/main');
const productsRouter = require('./routes/product');

app.use('/', mainRouter);
app.use('/products', productsRouter);

// Server

app.listen(process.env.PORT || 3000, function() {
    console.log('Se esta corriendo el servidor en http://localhost:3000')
});