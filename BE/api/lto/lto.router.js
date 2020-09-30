const router = require("express").Router();
const ltoDB = require("./lto.model.js");


router.get("/", (req, res) => {
  ltoDB
    .getAllObjectives()
    .then((ltos) => res.status(200).json(ltos))
    .catch(({ name, code, message, stack }) => {
      res.status(500).json({ name, code, message, stack });
    });
});

router.get("/my", (req, res) => {
  const id = parseInt(req.decodedToken.subject);
  ltoDB
    .getAllUserObjectives(id)
    .then((ltos) => res.status(200).json(ltos))
    .catch(({ name, code, message, stack }) => {
      res.status(500).json({ name, code, message, stack });
    });
});

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
  const newLTO = { ...req.body, user_id: id  };
  ltoDB
    .addObjective(newLTO)
    .then((ltos) => res.status(200).json(ltos))
    .catch(({ name, code, message, stack }) => {
      res.status(500).json({ name, code, message, stack });
    });
});

router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const changes = { ...req.body };
  ltoDB
    .editObjective(id, changes)
    .then((ltos) => res.status(200).json(ltos))
    .catch(({ name, code, message, stack }) => {
      res.status(500).json({ name, code, message, stack });
    });
});

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  ltoDB
    .deleteObjective(id)
    .then((ltos) => res.status(200).json(ltos))
    .catch(({ name, code, message, stack }) => {
      res.status(500).json({ name, code, message, stack });
    });
});

module.exports = router;
