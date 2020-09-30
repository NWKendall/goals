const router = require("express").Router();
const tasksDB = require("./tasks.model.js");

router.post("/:id", (req, res) => {
  const date_id = parseInt(req.params.id);
  const newTask = { ...req.body, date_id: date_id };
  tasksDB
    .addTask(newTask)
    .then((task) => {
      res.status(201).json(task);
    })
    .catch(({ name, code, message, stack }) => {
      res.status(500).json({ name, code, message, stack });
    });
});

// get all tasks
router.get("/", (req, res) => {
  tasksDB
    .getAllTasks()
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch(({ name, code, message, stack }) => {
      res.status(500).json({ name, code, message, stack });
    });
});

// get specific task
router.get("/:id", (req, res) => {
  const task_id = parseInt(req.params.id);
  tasksDB
    .getTaskById(task_id)
    .then((task) => {
      res.status(200).json(task);
    })
    .catch(({ name, code, message, stack }) => {
      res.status(500).json({ name, code, message, stack });
    });
});

// get all user tasks
router.get("/all/my", (req, res) => {
  const user_id = parseInt(req.decodedToken.subject);
  tasksDB
    .getAllUserTasks(user_id)
    .then((tasks) => res.status(200).json(tasks))
    .catch(({ name, code, message, stack }) => {
      res.status(500).json({ name, code, message, stack });
    });
});

router.get("/today/my", (req, res) => {
  const user_id = parseInt(req.decodedToken.subject);
  const today = new Date;
  const date = today.toDateString()
  tasksDB
    .getUserDailyTasks(user_id, date)
    .then((tasks) => res.status(200).json(tasks))
    .catch(({ name, code, message, stack }) => {
      res.status(500).json({ name, code, message, stack });
    });
});

module.exports = router;
