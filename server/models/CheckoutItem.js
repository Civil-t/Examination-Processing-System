const mongoose = require('mongoose');

const CheckoutItemSchema = new mongoose.Schema({
  itemId: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }
});

const CheckoutItemModel = mongoose.model('CheckoutItem', CheckoutItemSchema);

module.exports = CheckoutItemModel;