const express = require('express')
const path = require('path');

const app = express()

// Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// List Controllers by Routes
const homeController = require('./controllers/home')
const portfolioController = require('./controllers/portfolio')

app.get('/', homeController.index)
app.get('/portfolio/:idportfolio', portfolioController.index)
app.put('/portfolio/:idportfolio', portfolioController.update)

// Start a server in 3001 port
app.listen(3001, () => {
    console.log('starting this server ...')
})