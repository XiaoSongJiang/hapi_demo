'use strict';

const db = require('../models/index');

module.exports = {
    name: 'mysql-connect',
    version: '1.0.0',
    // pkg: require('../package.json'),
    register: async function (server, options) {
        if (!server.app.db) {
            server.app.db = db;
        }
    }
};