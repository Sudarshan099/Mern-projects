// models/profile.js
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  description: {
    type: String,
    maxlength: 500,
  },
  productImage: {
    type: String, // Store the URL of the uploaded image
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
