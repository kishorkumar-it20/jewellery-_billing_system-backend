const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  discount: Number,
  tax: Number,
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
