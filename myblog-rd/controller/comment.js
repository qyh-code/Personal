const blogModel = require('../model/blogModel')

module.exports = {
    addComment: async function(ctx, next) {
        let { content, blogId, userId } = ctx.request.body;
        let results = await commentModel.saveComment(content, blogId, userId);
        if (results.insertId > 0) {
            ctx.body = {
                state: "success",
            };
        } else {
            ctx.body = {
                state: "fail",
            };
        }
    }
}