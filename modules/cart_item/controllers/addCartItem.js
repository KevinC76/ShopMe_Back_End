const mongoose = require('mongoose');

const addCartItem = async (req, res) => {
  const cartModel = mongoose.model('cart');
  const cartItemModel = mongoose.model('cartItem');
  const productsModel = mongoose.model('products');

  const { productID } = req.body;

  // validate
  if (!req.user) throw 'User not found';

  const productData = await productsModel.findById(productID);

  if (!productData) throw 'Product not found';

  const cartData = await cartModel.find({ user_id: req.user._id });

  const cartItemDataExist = await cartItemModel.findOne({
    cart_id: { $in: cartData.map((cart) => cart._id) },
    product_id: productID,
    status_payment: false,
  });

  if (cartItemDataExist) {
    // update quantity
    await cartItemDataExist.updateOne({
      $inc: {
        quantity: 1,
      },
    });
  } else {
    const createdCart = await cartModel.create({ user_id: req.user._id });
    // add cartItem
    const addCartItem = await cartItemModel.create({
      cart_id: createdCart._id,
      product_id: productID,
    });
    // update cart with cartItemID
    await cartModel.updateOne(
      {
        _id: createdCart._id,
      },
      {
        cart_item_id: addCartItem._id,
      },
      {
        runValidators: true,
      }
    );
  }

  // success
  res.status(200).json({ status: 'success', message: 'Item added to cart' });
};

module.exports = addCartItem;
