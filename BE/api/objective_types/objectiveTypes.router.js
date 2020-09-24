const router = require("express").Router();
const objTypesDB = require("./objectiveTypes.model.js");

const uniqueCheck = require("./middleware/uniqueCheck.mw.js");
const permission = require("./middleware/permissions.mw.js");

router.get("/", (req, res) => {
  objTypesDB
    .getObjectiveTypes()
    .then((types) => res.status(200).json(types))
    .catch(({ name, code, message, stack }) => {
      res.status(500).json({ name, code, message, stack });
    });
});

router.get("/my", (req, res) => {
  const user_id = parseInt(req.decodedToken.subject);
  objTypesDB
    .getMyObjectiveTypes(user_id)
    .then((types) => res.status(200).json(types))
    .catch(({ name, code, message, stack }) => {
      res.status(500).json({ name, code, message, stack });
    });
})

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  objTypesDB
    .getObjectiveType(id)
    .then((type) => res.status(200).json(type))
    .catch(({ name, code, message, stack }) => {
      res.status(500).json({ name, code, message, stack });
    });
});

router.post("/", uniqueCheck, (req, res) => {
  const user_id = parseInt(req.decodedToken.subject);
  const newObjective = { ...req.body, created_by: user_id }  
  objTypesDB
    .addObjectiveType(newObjective)
    .then((type) => res.status(201).json(type))
    .catch(({ name, code, message, stack }) => {
      res.status(500).json({ name, code, message, stack });
    });
});

router.put("/:id", permission, uniqueCheck, (req, res) => {
    const id = parseInt(req.params.id);
    const changes = { ...req.body }
    objTypesDB
      .editObjectiveType(id, changes)
      .then((type) => res.status(200).json(type))
      .catch(({ name, code, message, stack }) => {
        res.status(500).json({ name, code, message, stack });
      });
  });

  router.delete("/:id", permission, (req, res) => {
    const id = parseInt(req.params.id);
    objTypesDB
      .deleteObjectiveType(id)
      .then((type) => res.status(200).json(type))
      .catch(({ name, code, message, stack }) => {
        res.status(500).json({ name, code, message, stack });
      });
  });

module.exports = router;
