require("dotenv").config();

const express = require("express");
const globalMiddleWare = require("./middleware/globalMiddleware");
const authorizedMW = require("./middleware/authorized.mw.js");

const authRouter = require("./auth/auth.router.js");
const apiRouter = require("./api.router.js");

const server = express();
globalMiddleWare(server);

server.use("/api/auth", authRouter);
server.use("/api/goals", authorizedMW, apiRouter);

module.exports = server;
