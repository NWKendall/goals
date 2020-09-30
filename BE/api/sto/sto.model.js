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
  return db("sto");
}

function getObjectiveById(id) {
  return db("sto").where({ id }).first();
}

function getAllUserObjectives(id) {
  return db("sto").where("user_id", id);
}

async function addObjective(sto) {
  const newSto = await db("sto")
    .join("objective_types as o", "o.id", "l.type_id")
    .join("users", "users.id", "l.user_id")
    .insert(sto, "sto.id");

  const id = parseInt(newSto);
  return getObjectiveById(id);
}

async function editObjective(id, changes) {
  await db("sto")
    .where({ id })
    .update({ modified_at: new Date(), ...changes });

  return getObjectiveById(id);
}

function deleteObjective(id) {
  return db("sto").where({ id }).delete();
}
