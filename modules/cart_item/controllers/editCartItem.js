const mongoose = require('mongoose');

const editCartItem = async (req, res) => {
  const cartItemModel = mongoose.model('cartItem');
  const cartModel = mongoose.model('cart');

  const { productID, type } = req.body;

  //validate
  if (!req.user) throw 'User not found';
  if (!productID) throw 'Please provide product ID';
  if (!type) throw 'Please provide type';

  const cartData = await cartModel.find({ user_id: req.user._id });

  const cartItemData = await cartItemModel.findOne({
    product_id: productID,
    cart_id: { $in: cartData.map((cart) => cart._id) },
    status_payment: false,
  });

  if (!cartItemData) throw 'Item not found in cart';

  if (type === 'increment') {
    await cartItemModel.updateOne(
      {
        product_id: productID,
        cart_id: { $in: cartData.map((cart) => cart._id) },
      },
      {
        $inc: {
          quantity: 1,
        },
      },
      {
        runValidators: true,
      }
    );
  } else {
    await cartItemModel.updateOne(
      {
        product_id: productID,
        cart_id: { $in: cartData.map((cart) => cart._id) },
      },
      {
        $inc: {
          quantity: 1 * -1,
        },
      },
      {
        runValidators: true,
      }
    );
  }

  res.status(200).json({ status: 'success', message: 'Item edited' });
};

module.exports = editCartItem;
