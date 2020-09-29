const db = require("../../database/connection.js");

module.exports = {
  addTask,
  getAllTasks,
  getAllUserTasks,
  getTaskById,
  getUserDailyTasks,
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
  return db("tasks as t")
    .join("dates", "id", "t.date_id")
    .where("user_id", user_id);
}

function getTaskById(id) {
  return db("tasks").where({ id }).first();
}

function getUserDailyTasks(user_id, date) {
  // get specific date
  // join tasks by date

  return db("dates as d")
    .join("tasks as t", "t.date_id", "dates.id")
    .where("d.user_id", user_id)
    .andWhere("d.date", date);
}
