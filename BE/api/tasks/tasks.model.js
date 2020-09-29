const db = require("../../database/connection.js");
const { getAllUserDates } = require("../dates/dates.model.js");

module.exports = {
  addTask,
  getAllTasks,
  getAllUserTasks,
  getTaskById,
  getUserDailyTasks,
};

async function addTask(newTask) {
  const task = await db("tasks as t").join("dates as d", "d.id", "t.date_id").insert(newTask, "id");
  // return day with all tasks???
  const id = parseInt(task);
  return getTaskById(id);
}
function getAllTasks() {
  return db("tasks");
}

function getAllUserTasks(user_id, date) {
  
  return getAllUserDates(user_id)
    .join("tasks as t", "t.date_id", "d.id")
    .where("t.date_id", date);
}

function getTaskById(id) {
  return db("tasks").where({ id }).first();
}









function getUserDailyTasks(user_id, date) {
  return db("dates as d")
    .join("tasks as t", "t.date_id", "dates.id")
    .where("d.user_id", user_id)
    .andWhere("d.date", date);
}
