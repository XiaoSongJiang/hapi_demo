const GROUP_NAME = "test";

const axios = require('axios');

module.exports = [
    // 纯测试返回 接口
    {
        method: "GET",
        path: `/${GROUP_NAME}`,
        handler: (request, h) => {
            const data = { message: "hello world" };

            // 响应数据方式：
            // return h.response(data).code(200);
            return data;
        },
        config: {
            tags: ['api', 'test'],
            description: '测试hello'
        }
    },
    {
        method: "GET",
        path: `/index`,
        handler: async (request, h) => {
            const md5 = (str) => {
                let crypto = require('crypto');
                let md5sum = crypto.createHash('md5');
                md5sum.update(str || '', 'utf8');
                str = md5sum.digest('hex');
                return str;
            }
            let password = md5('appic123');
            try {
                const res = await axios.post('http://192.168.1.101:8081/api/login', {
                    username: 'yuanshengjia@appicplay.com',
                    password
                });
                return;
                // console.log(res)
                // return h.redirect('http://192.168.1.101:8081');
                // return res.data;
            } catch (error) {
                console.log(error)
            }

        },
        config: {
            tags: ['api', 'index'],
            description: '测试首页'
        }
    },
]