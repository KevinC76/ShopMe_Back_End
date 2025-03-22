const express = require('express');
const register = require('./controllers/register');
const login = require('./controllers/login');

const usersRoute = express();

// routes
usersRoute.post('/register', register);
usersRoute.post('/login', login);

module.exports = usersRoute;
