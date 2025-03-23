const express = require('express');
const addProduct = require('./controllers/addProduct');

const productsRoute = express();

// routes
productsRoute.post('/', addProduct);

module.exports = productsRoute;
