const db = require("../../database/connection.js");

module.exports = {
  getAllUsers,
  getUserById,
  registerUser,
  getUser,
  getUserByEmail,
  
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
  return db("users").select("*").where(user).first()
}

function getUserByEmail(email) {
  return db("users").where({email}).first()
}
