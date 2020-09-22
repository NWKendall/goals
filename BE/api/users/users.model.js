const db = require("../../database/connection.js");

module.exports = {
    getUsers,
}


function getUsers() {
    return db("users");
}