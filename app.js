'use strict';

const Hapi = require('hapi');
require('env2')('./.env');
const config = require('./config');
const routes = require('./routes');
const pluginHapiSwagger = require('./plugins/hapi-swagger');
const pluginDb = require('./plugins/mysql-connect');
const pluginGood = require('./plugins/hapi-good');

const server = Hapi.server(config.server);

const init = async () => {

    await server.register([
        pluginGood,
        pluginDb,
        // 为系统使用 hapi-swagger
        ...pluginHapiSwagger,
    ]);

    // 路由
    server.route([
        ...routes
    ]);
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();