const express = require("express");
const { newCategory } = require("../controller/categoryController");
const router = express.Router();

router.post("/category", newCategory);

module.exports = router;
