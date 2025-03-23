const express = require('express');
const addProduct = require('./controllers/addProduct');
const getProducts = require('./controllers/getProducts');
const editProduct = require('./controllers/editProduct');
const auth = require('../../middleware/auth');
const deleteProduct = require('./controllers/deleteProduct');

const productsRoute = express();

// routes
productsRoute.use(auth);

productsRoute.post('/', addProduct);
productsRoute.get('/', getProducts);
productsRoute.patch('/:product_id', editProduct);
productsRoute.delete('/:product_id', deleteProduct);

module.exports = productsRoute;
