const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
    },
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    description: {
      type: String,
      default: '',
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
    },
    stock: {
      type: Number,
      required: [true, 'Stock is required'],
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const productsModel = mongoose.model('products', productSchema);

module.exports = productsModel;
