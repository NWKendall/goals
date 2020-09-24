const db = require("../../database/connection.js");

module.exports = {
  getDates,
  getAllUserDates,
  getDatebyId,
  addDate,
  getUserDailyTasks,
};

function getDates() {
  return db("dates");
}
function getAllUserDates(id) {
  return db("dates").where("user_id", id);
}

function getDatebyId(id) {
  return db("dates").where({ id }).first();
}

async function addDate(date) {
  const newDate = await db("dates").insert(date, "id");

  const id = parseInt(newDate);
  return getDatebyId(id);
}


function getUserDailyTasks(user_id, date) {
  console.log(id)
  return db("dates as d").join("tasks as t", "t.date_id", "dates.id").where({"d.user_id": user_id, "d.date": date});
}
