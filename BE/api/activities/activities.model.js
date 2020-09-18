const db = require("../../database/connection.js");

module.exports = {
  getActivities,
  getDayActivity,
  addActivity,
  editActivity,
  deleteActivity
};

function getActivities() {
  return db("activities");
}

function getDayActivity(id) {
  return db("activities").where({ id }).first();
}

async function addActivity(data) {
  data.date = new Date();
  let newEntry = await db("activities").insert(data, "id");
  const id = Number(newEntry);
  return getDayActivity(id);
}

async function editActivity(id, changes) {
  await db("activities")
    .where({ id })
    .update({ modified_at: new Date(), ...changes });

  return getDayActivity(id);
}

function deleteActivity(id) {
    return db("activities").where({ id }).delete();
}