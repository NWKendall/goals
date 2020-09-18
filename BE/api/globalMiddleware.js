const cors = require('cors');
const helmet = require('helmet');
const express = require('express');

module.exports = server => {
    server.use(helmet()),
    server.use(cors()),
    server.use(express.json());
}