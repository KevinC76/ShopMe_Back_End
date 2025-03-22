const jsonwebtoen = require('jsonwebtoken');

const jwtManager = (user) => {
  const token = jsonwebtoen.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '1d',
    }
  );

  return token;
};

module.exports = jwtManager;
