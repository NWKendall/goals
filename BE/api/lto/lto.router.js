const { Router } = require("express")

const router = require("express").Router()
const UsersDB = require("../auth/auth.model.js");

router.get("/", (req, res) => {
    UsersDB.getAllUsers().then(users => res.status(200).json(users)).catch(({ name, code, message, stack }) => {
      res.status(500).json({ name, code, message, stack })})
  })
  

module.exports = router