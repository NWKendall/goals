const router = require("express").Router();
const cardioDB = require("./cardio.model.js");

router.post("/:id", (req, res) => {
  const date_id = parseInt(req.params.id);
  const newCardio = { ...req.body, date_id: date_id };
  cardioDB
    .addCardio(newCardio)
    .then((cardio) => {
      res.status(201).json(cardio);
    })
    .catch(({ name, code, message, stack }) => {
      res.status(500).json({ name, code, message, stack });
    });
});

router.get("/", (req, res) => {
  cardioDB
    .getAllCardios()
    .then((cardios) => {
      res.status(200).json(cardios);
    })
    .catch(({ name, code, message, stack }) => {
      res.status(500).json({ name, code, message, stack });
    });
});

router.get("/:id", (req, res) => {
  const cardio_id = parseInt(req.params.id);
  cardioDB
    .getCardioById(cardio_id)
    .then((cardio) => {
      res.status(200).json(cardio);
    })
    .catch(({ name, code, message, stack }) => {
      res.status(500).json({ name, code, message, stack });
    });
});

router.get("/all/my", (req, res) => {
  const user_id = parseInt(req.decodedToken.subject);
  cardioDB
    .getAllUserCardio(user_id)
    .then((cardios) => res.status(200).json(cardios))
    .catch(({ name, code, message, stack }) => {
      res.status(500).json({ name, code, message, stack });
    });
});

router.get("/today/my", (req, res) => {
  const user_id = parseInt(req.decodedToken.subject);
  const today = new Date();
  const todayAsString = today.toDateString();
  cardioDB
    .getUserDailyCardio(user_id, todayAsString)
    .then((cardios) => res.status(200).json(cardios))
    .catch(({ name, code, message, stack }) => {
      res.status(500).json({ name, code, message, stack });
    });
});

router.put("/:id", (req, res) => {
  const cardio_id = parseInt(req.params.id);
  const changes = { ...req.body };
  cardioDB
    .editCardio(cardio_id, changes)
    .then((cardio) => {
      res.status(200).json(cardio);
    })
    .catch(({ name, code, message, stack }) => {
      res.status(500).json({ name, code, message, stack });
    });
});

router.delete("/:id", (req, res) => {
  const cardio_id = parseInt(req.params.id);
  cardioDB
    .deleteCardio(cardio_id)
    .then((cardio) => res.status(200).json(cardio))
    .catch(({ name, code, message, stack }) => {
      res.status(500).json({ name, code, message, stack });
    });
});

module.exports = router;
