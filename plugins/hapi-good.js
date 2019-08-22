const good = require('@hapi/good');


const options = {
    ops: {
        interval: 1000,
    },
    reporters: {
        responseConsoleReporter: [
            {
                module: '@hapi/good-squeeze',
                name: 'Squeeze',
                args: [{ log: '*', response: '*' }]
            },
            {
                module: '@hapi/good-console'
            },
            'stdout'
        ],
    },
};

module.exports = {
    plugin: good,
    options,
};