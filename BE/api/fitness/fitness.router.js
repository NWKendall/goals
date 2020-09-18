const router = require("express").Router();

router.get("/", (req, res) => {
    res.status(200).json({ fitness: "WORKING" })   
})

module.exports = router;
