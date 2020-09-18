require("dotenv").config();

const express = require("express");
const globalMiddleWare = require("./globalMiddleware");
const apiRouter = require("./api.router.js");

const server = express()
globalMiddleWare(server)

server.use('/api', apiRouter)

server.get('/', (req, res) => {
    res.status(200).json({ server: "LISTENING" })
})


module.exports = server