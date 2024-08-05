const express = require("express");
const Category = require("../models/category");
const dotenv = require("dotenv");

dotenv.config();

const newCategory = async (req, res) => {
  const data = req.body;
  const name = data.name;
  const product = data.product;

  const newCategory = new Category({
    name: name,
    product: product,
  });
  newCategory
    .save()
    .then((data) => {
      res
        .status(201)
        .json({ message: "User Category added successfully", data });
    })
    .catch((err) => {
      res.status(500).json({ message: "Error Occured", err });
    });
};

module.exports = {
  newCategory,
};
