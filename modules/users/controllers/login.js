const mongoose = require('mongoose');
const jwtManager = require('../../../managers/jwtManager');
const bcrypt = require('bcrypt');

const login = async (req, res) => {
  const usersModel = mongoose.model('users');

  const { email, password } = req.body;

  // validate
  if (!email || !password) throw 'Please input all fields';
  if (password.length < 6) throw 'Password must be at least 6 characters';

  const findUser = await usersModel.findOne({
    email,
  });

  if (!findUser) throw 'Email not registered';

  // compare password
  const comparePassword = await bcrypt.compare(password, findUser.password);

  if (!comparePassword) throw 'Password not match';

  const accessToken = jwtManager(findUser);

  // success
  res.status(200).json({
    status: 'success',
    message: 'Succeessfully login',
    token: accessToken,
  });
};

module.exports = login;
