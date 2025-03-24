const mongoose = require('mongoose');

const deleteCartItem = async (req, res) => {
  const { productID } = req.body;

  const cartItemModel = mongoose.model('cartItem');
  const cartModel = mongoose.model('cart');

  // validate
  if (!req.user) throw 'User not found';
  if (!productID) throw 'Please provide product ID';

  const cartData = await cartModel.find({ user_id: req.user._id });

  const cartItemData = await cartItemModel.findOne({
    product_id: productID,
    cart_id: { $in: cartData.map((cart) => cart._id) },
  });

  if (!cartItemData) throw 'Item not found in cart';

  await cartModel.deleteOne({ _id: cartItemData.cart_id });
  await cartItemModel.deleteOne({ _id: cartItemData._id });

  res
    .status(200)
    .json({ status: 'success', message: 'Item deleted from cart' });
};

module.exports = deleteCartItem;
