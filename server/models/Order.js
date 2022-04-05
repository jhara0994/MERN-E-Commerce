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
    type: Number,
    required: true,
  },
  buyerId: {
    type: Number,
    required: true,
  }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;