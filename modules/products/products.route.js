const express = require('express');
const addProduct = require('./controllers/addProduct');
const getProducts = require('./controllers/getProducts');

const productsRoute = express();

// routes
productsRoute.post('/', addProduct);
productsRoute.get('/', getProducts);

module.exports = productsRoute;
