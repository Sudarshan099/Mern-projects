const express = require("express");
const UserProfile = require("../models/userProfile");
const router = express.Router();

const userProfile = (req, res) => {
  // const {name,email} = req.body;

  const data = req.body;
  const userName = data.name;
  const userEmail = data.email;

  const newUserProfile = new UserProfile({
    name: userName,
    email: userEmail,
  });
  newUserProfile
    .save()
    .then((data) => {
      res
        .status(201)
        .json({ message: "User Profile added successfully", data });
    })
    .catch((err) => {
      res.status(500).json({ message: "Error Occured", err });
    });
};

module.exports = userProfile;
