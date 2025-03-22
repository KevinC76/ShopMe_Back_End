const express = require('express');
const register = require('./controllers/register');
const login = require('./controllers/login');
const getUserData = require('./controllers/getUserInformation');
const edituser = require('./controllers/editUser');

const usersRoute = express();

// routes
usersRoute.post('/register', register);
usersRoute.post('/login', login);
usersRoute.get('/user/:userId', getUserData);
usersRoute.patch('/user/:userId', edituser);

module.exports = usersRoute;
