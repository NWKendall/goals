const router = require("express").Router();
const datesDB = require("./dates.model.js");

router.get("/", (req, res) => {
  const user_id = parseInt(req.decodedToken.subject);
  datesDB
    .getAllUserDates(user_id)
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
      .getUserTasks(user_id)
      .then((dates) => {
        res.status(200).json(dates);
      })
      .catch(({ name, code, message, stack }) => {
        res.status(500).json({ name, code, message, stack });
      });
  });



module.exports = router;
