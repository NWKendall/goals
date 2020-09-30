const db = require("../../database/connection.js");

module.exports = {
  getDates,
  getAllUserDates,
  getDateById,
  addDate,
  editDate,
  deleteDate
};

function getDates() {
  return db("dates");
}
function getAllUserDates(id) {
  return db("dates").where("user_id", id);
}

function getDateById(id) {
  return db("dates").where({ id }).first();
}

async function addDate(date) {
  const newDate = await db("dates").insert(date, "id");

  const id = parseInt(newDate);
  return getDateById(id);
}

async function editDate(id, changes) {
  await db("dates")
    .where({ id })
    .update({ modified_at: new Date(), ...changes });

  return getDateById(id);
}

function deleteDate(id) {
  return db("dates").where({ id }).delete();
}




