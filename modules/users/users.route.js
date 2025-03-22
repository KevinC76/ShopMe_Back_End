const express = require('express');
const register = require('./controllers/register');

const usersRoute = express();

// routes
usersRoute.post('/', register);

module.exports = usersRoute;
