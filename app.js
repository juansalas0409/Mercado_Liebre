const express = require('express');

const app = express();

const routes = require('./routes/main');

const path = require('path')

app.use(express.static("./public"));

app.set('public', path.join(__dirname, 'public'))
app.set('views', path.join(__dirname, 'views'))
app.set("view engine", "ejs");

app.use('/', routes);

app.listen(process.env.PORT || 3000, function() {
    console.log('Se esta corriendo el servidor en http://localhost:3000')
});

