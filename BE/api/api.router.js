const router = require("express").Router()

const fitnessRouter = require("./fitness/fitness.router.js");
const activitiesRouter = require("./activities/activities.router.js");
const runningRouter = require("./running/running.router.js");
const usersRouter = require("./users/users.router.js");
const stoRouter = require("./sto/sto.router.js");
const ltoRouter = require("./lto/lto.router.js");

router.get("/", (req, res) => {
    res.status(200).json({ router: "WORKING" })
    
})

router.use("/users", usersRouter)
router.use("/activities", activitiesRouter)
router.use("/fitness", fitnessRouter)
router.use("/running", runningRouter)
router.use("/sto", stoRouter)
router.use("/lto", ltoRouter)


module.exports = router