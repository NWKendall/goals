const router = require("express").Router();
const datesDB = require("./dates.model.js");

router.post("/", (req, res) => {
  const id = parseInt(req.decodedToken.subject);
  const newDate = { ...req.body, user_id: id };
  datesDB
    .addDate(newDate)
    .then((date) => {
      res.status(201).json(date);
    })
    .catch(({ name, code, message, stack }) => {
      res.status(500).json({ name, code, message, stack });
    });
});

router.get("/", (req, res) => {
  datesDB
    .getDates()
    .then((dates) => {
      res.status(200).json(dates);
    })
    .catch(({ name, code, message, stack }) => {
      res.status(500).json({ name, code, message, stack });
    });
});

router.get("/my", (req, res) => {
  const id = parseInt(req.decodedToken.subject);
  datesDB
    .getAllUserDates(id)
    .then((types) => res.status(200).json(types))
    .catch(({ name, code, message, stack }) => {
      res.status(500).json({ name, code, message, stack });
    });
});

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  datesDB
    .getDatebyId(id)
    .then((dates) => {
      res.status(200).json(dates);
    })
    .catch(({ name, code, message, stack }) => {
      res.status(500).json({ name, code, message, stack });
    });
});


router.get("/test", (req, res) => {
  const user_id = parseInt(req.decodedToken.subject);
  datesDB
    .getUserDailyTasks(user_id)
    .then((dates) => {
      res.status(200).json(dates);
    })
    .catch(({ name, code, message, stack }) => {
      res.status(500).json({ name, code, message, stack });
    });
});

module.exports = router;
