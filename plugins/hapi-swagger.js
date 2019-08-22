
const package = require('../package.json');
const hapiSwagger = require('hapi-swagger');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
module.exports = [
    Inert,
    Vision,
    {
        plugin: hapiSwagger,
        options: {
            info: {
                title: '接口文档',
                version: package.version,
                contact: {
                    name: 'Oliver',
                    url: 'https://github.com/oliyg',
                    email: '123@qq.com',
                },
                license: {
                    name: 'MIT',
                    url: 'https://github.com/oliyg/hapiblog/blob/master/LICENSE',
                },
            },
            // 定义接口以 tags 属性定义为分组
            grouping: 'tags',
            tags: [
                { name: 'test', description: '测试相关' },
            ]
        }
    }
]