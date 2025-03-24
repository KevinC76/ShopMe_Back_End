const mongoose = require('mongoose');

const getCartItem = async (req, res) => {
  const cartItemModel = mongoose.model('cartItem');
  const cartModel = mongoose.model('cart');

  //validate
  if (!req.user) throw 'User not found';

  const cartData = await cartModel.find({ user_id: req.user._id });

  const cartItemData = await cartItemModel.find({
    cart_id: { $in: cartData.map((cart) => cart._id) },
  });

  res
    .status(200)
    .json({ status: 'success', message: 'Get cart item', data: cartItemData });
};

module.exports = getCartItem;
