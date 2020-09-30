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
  const userId = parseInt(req.decodedToken.subject);
  datesDB
    .getAllUserDates(userId)
    .then((types) => res.status(200).json(types))
    .catch(({ name, code, message, stack }) => {
      res.status(500).json({ name, code, message, stack });
    });
});

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  datesDB
    .getDateById(id)
    .then((dates) => {
      res.status(200).json(dates);
    })
    .catch(({ name, code, message, stack }) => {
      res.status(500).json({ name, code, message, stack });
    });
});

router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const changes = { ...req.body };
  datesDB
    .editDate(id, changes)
    .then((ltos) => res.status(200).json(ltos))
    .catch(({ name, code, message, stack }) => {
      res.status(500).json({ name, code, message, stack });
    });
});

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  datesDB
    .deleteDate(id)
    .then((ltos) => res.status(200).json(ltos))
    .catch(({ name, code, message, stack }) => {
      res.status(500).json({ name, code, message, stack });
    });
});
module.exports = router;
