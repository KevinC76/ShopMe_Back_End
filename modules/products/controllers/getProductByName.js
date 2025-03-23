const mongoose = require('mongoose');

const getProductByName = async (req, res) => {
  const productsModel = mongoose.model('products');
  const { name } = req.query;

  // validate
  const products = await productsModel.find({
    name: { $regex: new RegExp(name, 'i') },
  });

  if (!products) throw 'Product not found';

  res.status(200).json({
    status: 'success',
    message: 'Get product by name',
    data: products,
  });
};

module.exports = getProductByName;
