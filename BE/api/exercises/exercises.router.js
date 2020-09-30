const router = require("express").Router();
const exercisesDB = require("./exercises.model.js");

router.post("/:id", (req, res) => {
  const date_id = parseInt(req.params.id);
  const newExercise = { ...req.body, date_id: date_id };
  exercisesDB
    .addExercise(newExercise)
    .then((task) => {
      res.status(201).json(task);
    })
    .catch(({ name, code, message, stack }) => {
      res.status(500).json({ name, code, message, stack });
    });
});

router.get("/", (req, res) => {
  exercisesDB
    .getAllExercises()
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch(({ name, code, message, stack }) => {
      res.status(500).json({ name, code, message, stack });
    });
});

router.get("/:id", (req, res) => {
  const exercise_id = parseInt(req.params.id);
  exercisesDB
    .getExerciseById(exercise_id)
    .then((task) => {
      res.status(200).json(task);
    })
    .catch(({ name, code, message, stack }) => {
      res.status(500).json({ name, code, message, stack });
    });
});

router.get("/all/my", (req, res) => {
  const user_id = parseInt(req.decodedToken.subject);
  exercisesDB
    .getAllUserExercises(user_id)
    .then((tasks) => res.status(200).json(tasks))
    .catch(({ name, code, message, stack }) => {
      res.status(500).json({ name, code, message, stack });
    });
});

router.get("/today/my", (req, res) => {
  const user_id = parseInt(req.decodedToken.subject);
  const today = new Date();
  const todayAsString = today.toDateString();
  exercisesDB
    .getUserDailyExercises(user_id, todayAsString)
    .then((tasks) => res.status(200).json(tasks))
    .catch(({ name, code, message, stack }) => {
      res.status(500).json({ name, code, message, stack });
    });
});

router.put("/:id", (req, res) => {
  const exercise_id = parseInt(req.params.id);
  const changes = { ...req.body };
  exercisesDB
    .editExercise(exercise_id, changes)
    .then((task) => {
      res.status(200).json(task);
    })
    .catch(({ name, code, message, stack }) => {
      res.status(500).json({ name, code, message, stack });
    });
});

router.delete("/:id", (req, res) => {
  const exercise_id = parseInt(req.params.id);
  exercisesDB
    .deleteExercise(exercise_id)
    .then((type) => res.status(200).json(type))
    .catch(({ name, code, message, stack }) => {
      res.status(500).json({ name, code, message, stack });
    });
});

module.exports = router;
