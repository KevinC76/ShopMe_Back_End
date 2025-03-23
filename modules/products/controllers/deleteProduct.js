const mongoose = require('mongoose');

const deleteProduct = async (req, res) => {
  const productsModel = mongoose.model('products');
  const { product_id } = req.params;

  // validate
  if (!req.user._id) throw 'User ID is required';
  if (!product_id) throw 'Product ID is required';

  const product = await productsModel.findOne({
    _id: product_id,
  });

  if (!product) throw 'Product not found';

  if (product.user_id.toString() !== req.user._id.toString())
    throw 'You are not authorized to delete this product';

  // delete

  await productsModel.deleteOne({
    _id: product_id,
  });

  res
    .status(200)
    .json({ status: 'success', message: 'Product deleted successfully' });
};

module.exports = deleteProduct;
