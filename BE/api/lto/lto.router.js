const router = require("express").Router();
const UsersDB = require("../auth/auth.model.js");
const ltoDB = require("./lto.model.js");

router.get("/test", (req, res) => {
  UsersDB.getAllUsers()
    .then((users) => res.status(200).json(users))
    .catch(({ name, code, message, stack }) => {
      res.status(500).json({ name, code, message, stack });
    });
});

// get all ltos for all users
router.get("/", (req, res) => {
  ltoDB
    .getAllObjectives()
    .then((ltos) => res.status(200).json(ltos))
    .catch(({ name, code, message, stack }) => {
      res.status(500).json({ name, code, message, stack });
    });
});

// get all LTOs for user
router.get("/my", (req, res) => {
  const id = parseInt(req.decodedToken.subject);
  ltoDB
    .getAllUserObjectives(id)
    .then((ltos) => res.status(200).json(ltos))
    .catch(({ name, code, message, stack }) => {
      res.status(500).json({ name, code, message, stack });
    });
});

// get specific LTO
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  ltoDB
    .getObjectiveById(id)
    .then((lto) => res.status(200).json(lto))
    .catch(({ name, code, message, stack }) => {
      res.status(500).json({ name, code, message, stack });
    });
});

router.post("/", (req, res) => {
  const id = parseInt(req.decodedToken.subject);
  const newLTO = { user_id: id, deadline: "2020-09-08", ...req.body };
  ltoDB
    .addObjective(newLTO)
    .then((ltos) => res.status(200).json(ltos))
    .catch(({ name, code, message, stack }) => {
      res.status(500).json({ name, code, message, stack });
    });
});

module.exports = router;
