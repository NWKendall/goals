const router = require("express").Router();

router.get("/", (req, res) => {
    res.status(200).json({ activities: "WORKING" })   
})

module.exports = router;
