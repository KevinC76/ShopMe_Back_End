const express = require('express');
const addProduct = require('./controllers/addProduct');
const getProducts = require('./controllers/getProducts');
const editProduct = require('./controllers/editProduct');
const auth = require('../../middleware/auth');
const deleteProduct = require('./controllers/deleteProduct');
const getProductById = require('./controllers/getProductById');
const getProductByName = require('./controllers/getProductByName');

const productsRoute = express();

// routes
productsRoute.use(auth);

productsRoute.post('/', addProduct);
productsRoute.get('/', getProducts);
productsRoute.get('/search', getProductByName);
productsRoute.get('/:product_id', getProductById);
productsRoute.patch('/:product_id', editProduct);
productsRoute.delete('/:product_id', deleteProduct);

module.exports = productsRoute;
