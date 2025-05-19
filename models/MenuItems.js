const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // ✅ corrected spelling
  },
  price: {
    type: Number,
    required: true, // ✅ corrected spelling
  },
  taste: {
    type: String,
    enum: ["sweet", "spicy", "sour"],
    required: true, // ✅ corrected spelling
  },
  is_drink: {
    type: Boolean,
    default: true,
  },
  ingredients: {
    type: [String], // ✅ corrected type
    default: [],
  },
  num_sales: {
    type: Number,
    default: 0,
  },
});

const MenuItem = mongoose.model('MenuItem', menuItemSchema);
module.exports = MenuItem;
