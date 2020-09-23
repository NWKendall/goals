const { Router } = require("express")

const router = require("express").Router()

router.get("/", (req, res) => {
    res.status(200).json({ sto: "WOKRING "})
})

module.exports = router