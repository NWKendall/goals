const db = require("../../database/connection.js");

module.exports = {
  addTask,
  getAllTasks,
  getAllUserTasks,
  getTaskById,
  getUserDailyTasks,
  editTask,
  deleteTask
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

function getUserDailyTasks(user_id, date) {

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
    .where("dates.user_id", user_id)
    .andWhere("dates.date", date)
}

async function editTask(id, changes) {
  await db("tasks")
  .where({ id })
  .update({ modified_at: new Date(), ...changes });

return getTaskById(id);
}

function deleteTask(id) {
  return db("tasks").where({ id }).delete();
}