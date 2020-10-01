const db = require("../../database/connection.js");

module.exports = {
  getAllUsers,
  getUserById,
  registerUser,
  getUser,
  getUserByEmail,
  editUserCredentials,
  deleteUser
};

function getAllUsers() {
  return db("users");
}

function getUserById(id) {
  return db("users").select("*").where({ id }).first();
}

async function registerUser(user) {
  const [id] = await db("users").insert(user, "id");

  return getUserById(id);
}

function getUser(user) {
  return db("users").select("*").where(user).first();
}

async function getUserByEmail(email) {
  return db("users").where({ email }).first();
}

async function editUserCredentials(id, changes) {
  await db("users")
    .where({ id })
    .update({ modified_at: new Date(), ...changes});
  
    return getUserById(id);
}

function deleteUser(id) {
  return db("users").where({ id }).delete();
}
