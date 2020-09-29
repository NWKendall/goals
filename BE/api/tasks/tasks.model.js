const db = require("../../database/connection.js");

module.exports = {
  addTask,
  getAllTasks,
  getAllUserTasks,
  getTaskById,
  getUserDailyTasks
};

async function addTask(newTask) {
  const task = await db("tasks as t")
    .join("dates as d", "d.id", "t.date_id")
    .insert(newTask, "id");

  const id = parseInt(task);
  return getTaskById(id);
}
function getAllTasks() {
  return db("tasks");
}

function getAllUserTasks(user_id) {
  return db("tasks")
  .join("dates", "tasks.date_id", "dates.id")
      .select(
        "tasks.id",
        "tasks.name",
        "tasks.completed",
        "tasks.date_id",
        "dates.date",
        "dates.user_id"
      )
    .where("dates.user_id", user_id);
}

function getTaskById(id) {
  return db("tasks").where({ id }).first();
}

function getUserDailyTasks( date) {
  // get specific date
  // join tasks by date

  return db("tasks")
  .join("dates", "tasks.date_id", "dates.id")
      .select(
        "tasks.id",
        "tasks.name",
        "tasks.completed",
        "tasks.date_id",
        "dates.date",
        "dates.user_id"
      )
    .where("dates.id", date);

//   return db("dates as d")
//     .join("tasks as t", "t.date_id", "dates.id")
//     .where("d.user_id", user_id)
//     .andWhere("d.date", date);
}

// SELECT t.id as tID, t.name as task, t.completed, t.date_id, d.date, d.user_id from tasks as t
// join dates as d
// on d.id = t.date_id
// where d.user_id = 1
