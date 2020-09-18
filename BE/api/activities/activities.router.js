const router = require("express").Router();
const activitiesDB = require("./activities.model.js");

router.get("/", (req, res) => {
  activitiesDB
    .getActivities()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch(({ name, code, message, stack }) => {
      res.status(500).json({ name, code, message, stack });
    });
});

router.post("/", (req, res) => {
  const data = req.body;
  activitiesDB
    .addActivity(data)
    .then((activities) => {
      res.status(201).json(activities);
    })
    .catch(({ name, code, message, stack }) => {
      res.status(500).json({ name, code, message, stack });
    });
});

router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const changes = { ...req.body, id };
  activitiesDB
    .editActivity(id, changes)
    .then((activities) => {
      res.status(200).json(activities);
    })
    .catch(({ name, code, message, stack }) => {
      res.status(500).json({ name, code, message, stack });
    });
});

router.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    activitiesDB
      .deleteActivity(id)
      .then((activity) => {
        res.status(200).json(activity);
      })
      .catch(({ name, code, message, stack }) => {
        res.status(500).json({ name, code, message, stack });
      });
  });

module.exports = router;
