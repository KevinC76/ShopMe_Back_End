const express = require('express');
const auth = require('../../middleware/auth');
const addCartItem = require('./controllers/addCartItem');
const deleteCartItem = require('./controllers/deleteCartItem');
const editCartItem = require('./controllers/editCartItem');
const getCartItem = require('./controllers/getCartItem');

const cartItemRoute = express();

// routes
cartItemRoute.use(auth);
cartItemRoute.get('/', getCartItem);
cartItemRoute.post('/', addCartItem);
cartItemRoute.delete('/', deleteCartItem);
cartItemRoute.patch('/', editCartItem);

module.exports = cartItemRoute;
