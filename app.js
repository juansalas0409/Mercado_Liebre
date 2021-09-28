const express = require('express');

const app = express();

const path = require('path');

// const publicPath = path.join(__dirname, './public');

const routes = require('./routes/main')

app.use(express.static("./public"));

app.set("view engine", "ejs");

app.use('/', routes);

app.use(express.urlencoded({extended: false}));

app.use(express.json());

app.listen(process.env.PORT || 3000, function() {
    console.log('Se esta corriendo el servidor en http://localhost:3000')
});

