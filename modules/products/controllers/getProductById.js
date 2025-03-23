const mongoose = require('mongoose');

const getProductById = async (req, res) => {
  const productsModel = mongoose.model('products');
  const { product_id } = req.params;

  // validate
  if (!mongoose.Types.ObjectId.isValid(product_id)) {
    res.status(400).json({ status: 'error', message: 'Invalid product id' });
    return;
  }

  const productData = await productsModel.findOne({ _id: product_id });

  if (!productData) throw 'Product not found';

  res.status(200).json({
    status: 'success',
    message: 'Get product by id',
    product: productData,
  });
};

module.exports = getProductById;
