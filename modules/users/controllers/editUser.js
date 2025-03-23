const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const edituser = async (req, res) => {
  const usersModel = mongoose.model('users');

  const { name, address } = req.body;

  // validate
  const findUser = usersModel.findOne({
    _id: req.user._id,
  });

  if (!findUser) throw 'User not found';

  // update
  await usersModel.updateOne(
    {
      _id: req.user._id,
    },
    {
      name,
      address,
    },
    {
      runValidators: true,
    }
  );

  res.status(200).json({
    status: 'success',
    message: 'Edit user data successfully',
  });
};

module.exports = edituser;
