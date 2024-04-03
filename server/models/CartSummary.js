const mongoose = require('mongoose');

const CheckoutItemSchema = new mongoose.Schema({
  summary: Array,
  totalAmount: Number
});

const CheckoutItemModel = mongoose.model('checkoutitems', CheckoutItemSchema);
module.exports = CheckoutItemModel;