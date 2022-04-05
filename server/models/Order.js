const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }
  ],
  sellerId: {
    type: INT,
    required: true,
  },
  buyerId: {
    type: INT,
    required: true,
  }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;