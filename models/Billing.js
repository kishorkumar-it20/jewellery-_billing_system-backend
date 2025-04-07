const mongoose = require('mongoose');

const billingSchema = new mongoose.Schema({
  date: Date,
  items: [
    {
      name: String,
      qty: Number,
      price: Number,
      discount: Number,
      tax: Number,
    }
  ],
  total: Number,
}, { timestamps: true });

module.exports = mongoose.model('Billing', billingSchema);
