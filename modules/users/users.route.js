const express = require('express');
const register = require('./controllers/register');
const login = require('./controllers/login');
const getUserData = require('./controllers/getUserInformation');
const edituser = require('./controllers/editUser');
const auth = require('../../middleware/auth');

const usersRoute = express();

// routes
usersRoute.post('/register', register);
usersRoute.post('/login', login);

// Protected routes
usersRoute.use(auth);
usersRoute.get('/user', getUserData);
usersRoute.patch('/user', edituser);

module.exports = usersRoute;
