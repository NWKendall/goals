const router = require("express").Router()

const fitnessRouter = require("./fitness/fitness.router.js");
const activitiesRouter = require("./activities/activities.router.js");
const runningRouter = require("./running/running.router.js");

router.get("/", (req, res) => {
    res.status(200).json({ router: "WORKING" })
    
})

router.use("/activities", activitiesRouter)
router.use("/fitness", fitnessRouter)
router.use("/running", runningRouter)

module.exports = router