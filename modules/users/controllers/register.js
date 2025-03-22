const register = async (req, res) => {
  res.status(200).json({status: 'success', message: 'Register Route'});
}

module.exports = register;