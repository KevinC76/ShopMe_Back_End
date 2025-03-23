const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
    },
    cart_item_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'cart_item',
    },
  },
  {
    timestamps: true,
  }
);

const cartModel = mongoose.model('cart', cartSchema);

module.exports = cartModel;
