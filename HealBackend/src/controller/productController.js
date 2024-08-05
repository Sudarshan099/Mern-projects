const express = require("express");
const domain = "http://localhost:5000";
const Product = require("../models/product");
const dotenv = require("dotenv");

dotenv.config();

const addProduct = async (req, res) => {
  const data = req.body;
  const description = data.description;

  const productImage = "";
  if (req.file) {
    productImage = `${domain}/uploads/product/${req.file.filename}`;
  }

  const addProduct = new Product({
    description: description,
    productImage: productImage,
  });
  addProduct
    .save()
    .then((data) => {
      res.status(201).json({ message: "Product added successfully", data });
    })
    .catch((err) => {
      res.status(500).json({ message: "Error Occured", err });
    });
};

module.exports = {
  addProduct,
};
