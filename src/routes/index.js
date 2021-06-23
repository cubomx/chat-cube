const express = require("express");
// routes
const message = require("./message");
const user = require("./user");

const initial = '/api';

const routes = (server) => {
    server.use(initial + '/message', message);
    server.use(initial + '/user', user);
}

module.exports = routes;