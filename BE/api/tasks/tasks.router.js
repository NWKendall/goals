const router = require("express").Router();
const tasksDB = require("./tasks.model.js");

// add new task to date
// move to dates?
// dates as it's own apirouter??

router.post("/:id", (req, res) => {
  const date_id = parseInt(req.params.id);
  const newTask = { ...req.body, date_id: date_id };
  tasksDB
    .addTask(newTask)
    .then((dates) => {
      res.status(200).json(dates);
    })
    .catch(({ name, code, message, stack }) => {
      res.status(500).json({ name, code, message, stack });
    });
});

// get all tasks
router.get("/", (req, res) => {
  tasksDB
    .getAllTasks()
    .then((dates) => {
      res.status(200).json(dates);
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
    .then((dates) => {
      res.status(200).json(dates);
    })
    .catch(({ name, code, message, stack }) => {
      res.status(500).json({ name, code, message, stack });
    });
});

// get all user tasks
router.get("/my", (req, res) => {
  const user_id = parseInt(req.decodedToken.subject);
  let date = 2020-09-29;
  tasksDB
    .getAllUserTasks(user_id, date)
    .then((dates) => {
      res.status(200).json(dates);
    })
    .catch(({ name, code, message, stack }) => {
      res.status(500).json({ name, code, message, stack });
    });
});


// // get all tasks by date
// router.get("/:id/bla", (req, res) => {
//   const user_id = parseInt(req.decodedToken.subject);
//   const date_id = parseInt(req.params.id);
//   tasksDB
//     .getTasksByDate(user_id, date_id)
//     .then((dates) => {
//       res.status(200).json(dates);
//     })
//     .catch(({ name, code, message, stack }) => {
//       res.status(500).json({ name, code, message, stack });
//     });
// });


module.exports = router;
