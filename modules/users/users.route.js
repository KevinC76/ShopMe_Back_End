const express = require('express');
const register = require('./controllers/register');
const login = require('./controllers/login');
const getUserData = require('./controllers/getUserInformation');

const usersRoute = express();

// routes
usersRoute.post('/register', register);
usersRoute.post('/login', login);
usersRoute.get('/user/:userId', getUserData)

module.exports = usersRoute;
