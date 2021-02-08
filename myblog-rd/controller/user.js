const userModule = require('../model/userModle')
const { createToken } = require('../auth')

module.exports = {
    regist: async function(ctx, next) {
        let { username, password, nickname } = ctx.request.body;
        let results = await userModule.saveUser({ username, password, nickname });
        console.log(results)
        if (results.insertId) {
            ctx.body = {
                state: 'success',
            }
        } else {
            ctx.body = {
                state: 'fail'
            }
        };
    },
    login: async function(ctx, next) {
        let { username, password } = ctx.request.body;
        let results = await userModule.getNamePass(username, password);
        console.log(results)
        if (results.length > 0) {
            let payload = {
                username,
                userId: Math.random(),
            };
            var token = createToken(payload);
            ctx.body = {
                state: 'success',
                token,
                user: results[0]
            }
        } else {
            ctx.body = {
                state: 'fail'
            }
        };
    },

    writeUser: async function(ctx) {
        let { commenttext } = ctx.query;
        let results = await userModule.getUserByUsername(commenttext);
        console.log(results);
        if (results.length > 0) {
            ctx.body = {
                state: 'success'
            }
        } else {
            ctx.body = {
                state: 'fail'
            }
        }
    }
}