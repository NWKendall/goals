const db = require("../../database/connection.js");

module.exports = {
  addCardio,
  getAllCardios,
  getAllUserCardio,
  getCardioById,
  getUserDailyCardio,
  editCardio,
  deleteCardio,
};

async function addCardio(newCardio) {
  const cardio = await db("cardio as c")
    .join("dates as d", "d.id", "t.date_id")
    .insert(newCardio, "id");

  const id = parseInt(cardio);
  return getCardioById(id);
}
function getAllCardios() {
  return db("cardio");
}

function getAllUserCardio(user_id) {
  return db("cardio")
    .join("dates", "cardio.date_id", "dates.id")
    .select(
      "cardio.id",
      "cardio.name",
      "cardio.time",
      "cardio.distance",
      "cardio.date_id",
      "dates.date",
      "dates.user_id"
    )
    .where("dates.user_id", user_id);
}

function getCardioById(id) {
  return db("cardio").where({ id }).first();
}

function getUserDailyCardio(user_id, date) {
  return db("cardio")
    .join("dates", "cardio.date_id", "dates.id")
    .select(
      "cardio.id",
      "cardio.name",
      "cardio.time",
      "cardio.distance",
      "cardio.date_id",
      "dates.date",
      "dates.user_id"
    )
    .where("dates.user_id", user_id)
    .andWhere("dates.date", date);
}

async function editCardio(id, changes) {
  await db("cardio")
    .where({ id })
    .update({ modified_at: new Date(), ...changes });

  return getCardioById(id);
}

function deleteCardio(id) {
  return db("cardio").where({ id }).delete();
}
