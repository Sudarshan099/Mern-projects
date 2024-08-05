const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  name: {
    type: String,
    maxlength: 500,
    required: true,
  },
  product: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Category", CategorySchema);
