const GROUP_NAME = "user";

module.exports = [
    {
        method: "GET",
        path: `/${GROUP_NAME}/info`,
        handler: async (request, h) => {
            try {
                const data = await request.server.app.db.User.findAll({ raw: true });
                // console.log(data)
                return data;
            } catch (error) {
                console.log(error);
                return
            }
        },
        config: {
            tags: ['api', 'user'],
            description: 'userinfo'
        }
    }
]