require('express-async-errors');

const express = require('express');
const errorHandler = require('./handlers/error');
const mongoose = require('mongoose');
const usersRoute = require('./modules/users/users.route');
require('dotenv').config();

const app = express();

app.use(express.json());

// connect to MongoDb
mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => {
    console.log('Connected to MongoDb');
  })
  .catch(() => {
    console.log('Connection to MongoDb failed');
  });

// model initialization
require('./models/users.model');
require('./models/products.model');

// routes
app.use('/api/users', usersRoute);

// 404 route
app.all('*', (req, res, next) => {
  res.status(404).json({ status: 'failed', message: 'Page Not Found' });
});

// error handler
app.use(errorHandler);

// listen to port
app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
