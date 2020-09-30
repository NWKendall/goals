const db = require("../../database/connection.js");

module.exports = {
  getObjectiveTypes,
  getObjectiveTypeById,
  getObjectiveTypeByName,
  getMyObjectiveTypes,
  addObjectiveType,
  editObjectiveType,
  deleteObjectiveType
};

function getObjectiveTypes() {
  return db("objective_types");
}

function getObjectiveTypeById(id) {
  return db("objective_types").where({ id }).first();
}

function getObjectiveTypeByName(name) {
    return db("objective_types").where({ name }).first();
  }

function getMyObjectiveTypes(user_id) {
  return db("objective_types").where("created_by", user_id);
}

async function addObjectiveType(obj) {
  const newObjType = await db("objective_types").insert(obj, "id");
  const id = parseInt(newObjType);
  return getObjectiveTypeById(id);
}

async function editObjectiveType(id, changes) {
  await db("objective_types")
    .where({ id })
    .update({ modified_at: new Date(), ...changes });

  return getObjectiveTypeById(id);
}

function deleteObjectiveType(id) {
  return db("objective_types").where({ id }).delete();
}
