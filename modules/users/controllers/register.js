const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwtManager = require('../../../managers/jwtManager');

const register = async (req, res) => {
  const usersModel = mongoose.model('users');

  const { name, email, password, retype_password } = req.body;

  // validate
  if (!name || !email || !password || !retype_password)
    throw 'Please input all fields';

  if (password.length < 6) throw 'Password must be at least 6 characters';

  if (password !== retype_password) throw 'Password not match';

  const findDuplicate = await usersModel.findOne({
    email,
  });

  if (findDuplicate) throw 'Email already registered';

  // hash password
  const hashPass = await bcrypt.hash(password, 12);

  // register user
  const registerUser = await usersModel.create({
    name: name,
    email: email,
    password: hashPass,
  });

  // get access token
  const accessToken = jwtManager(registerUser);

  // success
  res.status(201).json({
    status: 'success',
    message: 'Successfully Register',
    token: accessToken,
  });
};

module.exports = register;
