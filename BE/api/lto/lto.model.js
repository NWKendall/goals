const db = require("../../database/connection.js");

module.exports = {
  getAllObjectives,
  getAllUserObjectives,
  getObjectiveById,
  addObjective,
  editObjective,
  deleteObjective,
};

function getAllObjectives() {
  return db("lto");
}

function getObjectiveById(id) {
  return db("lto").where({ id }).first();
}

function getAllUserObjectives(id) {
  return db("lto").where("lto.user_id", id);
}

async function addObjective(lto) {
  const newLTO = await db("lto")
    .join("objective_types as o", "o.id", "l.type_id")
    .join("users", "users.id", "l.user_id")
    .insert(lto, "lto.id");

  const id = parseInt(newLTO);
  return getObjectiveById(id);
}

async function editObjective(id, changes) {
  await db("lto")
    .where({ id })
    .update({ modified_at: new Date(), ...changes });

  return getObjectiveById(id);
}

function deleteObjective(id) {
  return db("lto").where({ id }).delete();
}
