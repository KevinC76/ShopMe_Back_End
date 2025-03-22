const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const edituser = async (req, res) => {
  const usersModel = mongoose.model('users');

  const { userId } = req.params;
  const { name } = req.body;

  console.log(req.body);
  console.log(userId);

  // validate
  const findUser = usersModel.findOne({
    _id: userId,
  });

  if (!findUser) throw 'User not found';

  // update
  await usersModel.updateOne(
    {
      _id: userId,
    },
    {
      name,
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
