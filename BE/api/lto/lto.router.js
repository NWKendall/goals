const { Router } = require("express")

const router = require("express").Router()

router.get("/", (req, res) => {
    res.status(200).json({ lto: "WOKRING "})
})

module.exports = router