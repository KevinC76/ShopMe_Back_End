const mongoose = require('mongoose');

const getProducts = async (req, res) => {
  const productsModel = mongoose.model('products');

  const products = await productsModel.find({});

  res.status(200).json({
    status: 'success',
    message: 'Get all products',
    products: products,
  });
};

module.exports = getProducts;
