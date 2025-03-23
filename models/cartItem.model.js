const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema(
  {
    cart_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'cart',
    },
    product_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'products',
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
      default: 1,
    },
    status_payment: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const cartItemModel = mongoose.model('cartItem', cartItemSchema);

module.exports = cartItemModel;
