const mongoose = require('mongoose');

const getUserData = async (req, res) => {
  const usersModel = mongoose.model('users');

  const userData = await usersModel.findOne({
    _id: req.user._id,
  });

  if (!userData) throw 'User not found';

  res.status(200).json({
    status: 'success',
    message: 'successfully get user data',
    data: userData,
  });
};

module.exports = getUserData;
