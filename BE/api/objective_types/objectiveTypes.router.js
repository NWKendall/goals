const router = require("express").Router();
const objTypesDB = require("./objectiveTypes.model.js");

const nameCheckMW = require("./middleware/uniqueObjType.mw.js");
const permissionMW = require("./middleware/authorize.mw.js");

router.get("/", (req, res) => {
  objTypesDB
    .getObjectiveTypes()
    .then((types) => res.status(200).json(types))
    .catch(({ name, code, message, stack }) => {
      res.status(500).json({ name, code, message, stack });
    });
});

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  objTypesDB
    .getObjectiveType(id)
    .then((type) => res.status(200).json(type))
    .catch(({ name, code, message, stack }) => {
      res.status(500).json({ name, code, message, stack });
    });
});

router.post("/", nameCheckMW, (req, res) => {
    objTypesDB
    .addObjectiveType(req.body)
    .then((type) => res.status(200).json(type))
    .catch(({ name, code, message, stack }) => {
      res.status(500).json({ name, code, message, stack });
    });
});

router.put("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const changes = { ...req.body }
    objTypesDB
      .editObjectiveType(id, changes)
      .then((type) => res.status(200).json(type))
      .catch(({ name, code, message, stack }) => {
        res.status(500).json({ name, code, message, stack });
      });
  });

  router.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    objTypesDB
      .deleteObjectiveType(id)
      .then((type) => res.status(200).json(type))
      .catch(({ name, code, message, stack }) => {
        res.status(500).json({ name, code, message, stack });
      });
  });

module.exports = router;
