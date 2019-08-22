const GROUP_NAME = "mygithub";

module.exports = [
    {
        method: "GET",
        path: `/${GROUP_NAME}`,
        handler: (request, h) => {
            let dataStr = (new Date()).valueOf();
            //重定向到认证接口,并配置参数
            //注意这里使用的是node的https模块发起的请求
            let path = "https://github.com/login/OAuth/authorize";
            path += '?client_id=' + GITHUB_CLIENT_ID;
            path += '&scope=' + GITHUB_CLIENT_SCOPE;
            path += '&state=' + dataStr;
            return h.redirect(path);
        },
        config: {
            tags: ['api', 'mygithub'],
            description: 'github授权'
        }
    },
    {
        method: "GET",
        path: `/oauth/callback`,
        handler: (request, h) => {

            return h.redirect(path);
        },
        config: {
            tags: ['api', 'oauth/callback'],
            description: 'github授权回调'
        }
    }
]