const db = require("../../database/connection.js");

module.exports = {
  getAllObjectives,
  getAllUserObjectives,
  getObjectiveById,
  addObjective,
};

function callLTODB() {
  return db("lto").join("objective_tpes as o", "o.id", "lto.type_id");
}

function getAllObjectives() {
  return db("lto");
}

function getObjectiveById(id) {
  return db("lto").where({ id }).first();
}

function getAllUserObjectives(id) {
  return db("lto")
    .join("users", "users.id", "lto.user_id")
    .where("users.id", id);
}

async function addObjective(lto) {
  const newLTO = await db("lto")
  .join("objective_types as o", "o.id", "lto.type_id")
  .join("users", "users.id", "lto.user_id")
  .insert(lto, "lto.id");

  const id = parseInt(newLTO)
  return getObjectiveById(id);
}
