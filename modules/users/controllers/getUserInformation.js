const mongoose = require('mongoose');

const getUserData = async (req, res) => {
  const usersModel = mongoose.model('users');

  const { userId } = req.params;

  const userData = await usersModel.findOne({
    _id: userId,
  });

  if (!userData) throw 'User not found';

  res.status(200).json({
    status: 'success',
    message: 'successfully get user data',
    data: userData,
  });
};

module.exports = getUserData;
