const db = require("../../database/connection.js");

module.exports = {
  addExercise,
  getAllExercises,
  getAllUserExercises,
  getExerciseById,
  getUserDailyExercises,
  editExercise,
  deleteExercise,
};

async function addExercise(newExercise) {
  const exercise = await db("exercises")
    .join("dates", "dates.id", "exercises.date_id")
    .insert(newExercise, "id");

  const id = parseInt(exercise);
  return getExerciseById(id);
}
function getAllExercises() {
  return db("exercises");
}

function getAllUserExercises(user_id) {
  return db("exercises")
    .join("dates", "exercises.date_id", "dates.id")
    .select(
      "exercises.id",
      "exercises.name",
      "exercises.variation",
      "exercises.sets",
      "exercises.reps",
      "exercises.date_id",
      "dates.date",
      "dates.user_id"
    )
    .where("dates.user_id", user_id);
}

function getExerciseById(id) {
  return db("exercises").where({ id }).first();
}

function getUserDailyExercises(user_id, date) {
  return db("exercises")
    .join("dates", "exercises.date_id", "dates.id")
    .select(
      "exercises.id",
      "exercises.name",
      "exercises.variation",
      "exercises.sets",
      "exercises.reps",
      "exercises.date_id",
      "dates.date",
      "dates.user_id"
    )
    .where("dates.user_id", user_id)
    .andWhere("dates.date", date);
}

async function editExercise(id, changes) {
  await db("exercises")
    .where({ id })
    .update({ modified_at: new Date(), ...changes });

  return getExerciseById(id);
}

function deleteExercise(id) {
  return db("exercises").where({ id }).delete();
}
