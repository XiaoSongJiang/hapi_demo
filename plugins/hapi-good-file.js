const good = require('@hapi/good');

const Fs = require('fs-extra');

const internals = {
    defaults: {
        encoding: 'utf8',
        flags: 'a',
        mode: 0o666
    }
};
class GoodFile extends Fs.WriteStream {
    constructor(path, options) {

        const settings = Object.assign({}, internals.defaults, options);
        settings.fd = -1; // prevent open from being called in `super`

        super(path, settings);
        this.open();
    }
    open() {

        this.fd = null;
        Fs.ensureFile(this.path, (err) => {

            if (err) {
                this.destroy();
                this.emit('error', err);
                return;
            }
            super.open();
        });
    }
}
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
        myFileReporter: [
            {
                module: '@hapi/good-squeeze',
                name: 'Squeeze',
                args: [{ ops: '*' }]
            },
            {
                module: '@hapi/good-squeeze',
                name: 'SafeJson'
            },
            {
                module: GoodFile,
                args: ['./logs/awesome_log']
            }
        ],
    },
};

module.exports = {
    plugin: good,
    options,
};