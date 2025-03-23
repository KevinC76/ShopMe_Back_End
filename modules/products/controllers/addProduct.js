const mongoose = require('mongoose');

const addProduct = async (req, res) => {
  const productsModel = mongoose.model('products');

  const { name, description, price, stock } = req.body;

  // validate
  if (!name) throw 'Name is required';
  if (!price) throw 'Price is required';
  if (!stock) throw 'Stock is required';

  if (stock < 0) throw 'Stock cannot be negative';
  if (price < 0) throw 'Price cannot be negative';

  // create new product
  await productsModel.create({
    user_id: req.user._id,
    name,
    description,
    price,
    stock,
  });

  // sucess
  res
    .status(200)
    .json({ status: 'success', message: 'Product added successfully' });
};

module.exports = addProduct;
