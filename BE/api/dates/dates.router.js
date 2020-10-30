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
    .then((dates) => res.status(200).json(dates))
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

router.post("/today", (req, res) => {
  const userId = parseInt(req.decodedToken.subject);
  console.log(req.body)
  datesDB
    .checkToday(userId, req.body)
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
    .then((date) => res.status(200).json(date))
    .catch(({ name, code, message, stack }) => {
      res.status(500).json({ name, code, message, stack });
    });
});

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  datesDB
    .deleteDate(id)
    .then((date) => res.status(200).json(date))
    .catch(({ name, code, message, stack }) => {
      res.status(500).json({ name, code, message, stack });
    });
});
module.exports = router;
