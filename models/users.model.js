const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    role: {
      type: String,
      enum: ['admin', 'customer'],
      default: 'customer',
    },
    address: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model('users', userSchema);

module.exports = userModel;
