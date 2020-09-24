const router = require("express").Router();

const fitnessRouter = require("./fitness/fitness.router.js");
const activitiesRouter = require("./activities/activities.router.js");
const runningRouter = require("./running/running.router.js");
const objTypesRouter = require("./objective_types/objectiveTypes.router.js")
const stoRouter = require("./sto/sto.router.js");
const ltoRouter = require("./lto/lto.router.js");
const datesRouter = require("./dates/dates.router.js");

router.get("/", (req, res) => {
  res.status(200).json({ router: "WORKING" });
});

router.use("/activities", activitiesRouter);
router.use("/objective-types", objTypesRouter);
router.use("/fitness", fitnessRouter);
router.use("/running", runningRouter);
router.use("/sto", stoRouter);
router.use("/lto", ltoRouter);
router.use("/dates", datesRouter);

module.exports = router;
