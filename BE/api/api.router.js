const router = require("express").Router();
const objTypesRouter = require("./objective_types/objectiveTypes.router.js")
const stoRouter = require("./sto/sto.router.js");
const ltoRouter = require("./lto/lto.router.js");

const datesRouter = require("./dates/dates.router.js");

const tasksRouter = require("./tasks/tasks.router.js");

const cardioRouter = require("./cardio/cardio.router.js");
const strengthRouter = require("./strength/strength.router.js");

router.get("/", (req, res) => {
  res.status(200).json({ router: "WORKING" });
});

router.use("/objective-types", objTypesRouter);
router.use("/sto", stoRouter);
router.use("/lto", ltoRouter);

router.use("/dates", datesRouter);

router.use("/tasks", tasksRouter);

router.use("/cardio", cardioRouter);
router.use("/strength", strengthRouter);

module.exports = router;
