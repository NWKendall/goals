const db = require("../../database/connection.js");

module.exports = {
    getAllUserDates,
    getDatebyId,
    addDate,
    getUserTasks

}

function getAllUserDates(id) {
    return db("dates as d").join("users_dates as ud", "ud.date_id", "d.id").where("ud.user_id", id);

}

function getDatebyId(id){
    return db("dates").where({ id }).first();
}



async function addDate(date) {
    const newDate = await db("dates").insert(date, "id");

    return getDatebyId(newDate)
}

function getUserTasks(id) {
    return getAllUserDates(id).join("tasks as t", "t.date_id", "d.id" )
}