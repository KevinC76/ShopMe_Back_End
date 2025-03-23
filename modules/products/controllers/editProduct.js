const mongoose = require('mongoose');

const editProduct = async (req, res) => {
  const productsModel = mongoose.model('products');
  const { product_id } = req.params;
  const { name, description, price, stock } = req.body;

  // validate
  if (!req.user._id) throw 'User ID is required';

  if (!product_id) throw 'Product ID is required';

  if (!name) throw 'Name is required';
  if (!price) throw 'Price is required';
  if (!stock) throw 'Stock is required';
  if (stock < 0) throw 'Stock cannot be negative';
  if (price < 0) throw 'Price cannot be negative';

  const product = await productsModel.findOne({ _id: product_id });

  if (!product) throw 'Product not found';
  // change it to string so it can be compare
  if (product.user_id.toString() !== req.user._id.toString())
    throw 'You are not authorized to edit this product';

  // update
  await productsModel.updateOne(
    {
      _id: product_id,
    },
    {
      name,
      description,
      price,
      stock,
    },
    {
      runValidators: true,
    }
  );

  //success
  res
    .status(200)
    .json({ status: 'success', message: 'Product updated successfully' });
};

module.exports = editProduct;
