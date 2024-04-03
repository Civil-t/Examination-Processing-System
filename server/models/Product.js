const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  p_id: Number,
  productName: String,
  price: Number,
  quantity: Number,
  
});

const ProductModel = mongoose.model('Product', ProductSchema);

module.exports = ProductModel;