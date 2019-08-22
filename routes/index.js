"use strict";

const fs = require("fs");
const path = require("path");
const basename = path.basename(__filename); // 当前文件名
let routes = [];

// 同步读取当前目录，并过滤除了当前文件的文件名数组
fs.readdirSync(__dirname)
    .filter(file => {
        // 过滤掉隐藏文件、当前文件、非js文件, 返回当前目录下文件名称数组
        return (
            file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
        );
    })
    .forEach(file => {
        // 引入路由模块
        let arr = require(path.join(__dirname, file));
        // 汇总
        routes.push(...arr);
    });

module.exports = routes;