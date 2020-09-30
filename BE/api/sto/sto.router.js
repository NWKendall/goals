const router = require("express").Router();
const stoDB = require("./sto.model.js");

router.get("/", (req, res) => {
  stoDB
    .getAllObjectives()
    .then((stos) => res.status(200).json(stos))
    .catch(({ name, code, message, stack }) => {
      res.status(500).json({ name, code, message, stack });
    });
});

router.get("/my", (req, res) => {
  const id = parseInt(req.decodedToken.subject);
  stoDB
    .getAllUserObjectives(id)
    .then((stos) => res.status(200).json(stos))
    .catch(({ name, code, message, stack }) => {
      res.status(500).json({ name, code, message, stack });
    });
});

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  stoDB
    .getObjectiveById(id)
    .then((lto) => res.status(200).json(lto))
    .catch(({ name, code, message, stack }) => {
      res.status(500).json({ name, code, message, stack });
    });
});

router.post("/", (req, res) => {
  const id = parseInt(req.decodedToken.subject);
  const newLTO = { ...req.body, user_id: id  };
  stoDB
    .addObjective(newLTO)
    .then((stos) => res.status(200).json(stos))
    .catch(({ name, code, message, stack }) => {
      res.status(500).json({ name, code, message, stack });
    });
});

router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const changes = { ...req.body };
  stoDB
    .editObjective(id, changes)
    .then((stos) => res.status(200).json(stos))
    .catch(({ name, code, message, stack }) => {
      res.status(500).json({ name, code, message, stack });
    });
});

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  stoDB
    .deleteObjective(id)
    .then((stos) => res.status(200).json(stos))
    .catch(({ name, code, message, stack }) => {
      res.status(500).json({ name, code, message, stack });
    });
});


module.exports = router;
