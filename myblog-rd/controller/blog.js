const blogModel = require('../model/blogModel')

module.exports = {
    postBlog: async function(ctx, next) {
        let { title, content, userId } = ctx.request.body;
        let results = await blogModel.saveBlog(title, content, userId);
        if (results.insertId > 0) {
            ctx.body = {
                state: 'success'
            }
        } else {
            ctx.body = {
                state: 'fail'
            }
        }
    },
    async getBlogList(ctx, next) {
        let results = await blogModel.getBlogs();
        ctx.body = {
            state: 'success',
            blogs: results
        }
    },
    async getBlogById(ctx) {
        let { blogId } = ctx.query;
        console.log(blogId)
        let results = await blogModel.getBlogById(blogId);
        if (results.length > 0) {
            let { blog_id, title, content, post_time } = results[0];
            let blogInfo = {
                blog_id,
                title,
                content,
                post_time,
            };
            blogInfo.comments = [];
            for (let i = 0; i < results.length; i++) {
                let obj = results[i];
                blogInfo.comments.push({
                    comm_id: obj.comm_id,
                    comm_content: obj.comm_content,
                    comm_post_time: obj.comm_post_time,
                    username: obj.username
                });
                ctx.body = {
                    state: 'success',
                    blog: blogInfo
                }
            }
        } else {
            ctx.body = {
                state: 'fail'
            }
        }
    },
    async deleteBlog(ctx) {
        let { blogId } = ctx.query;
        let results = await blogModel.deleteBlogById(blogId);
        console.log(results)
        if (results.affectedRows > 0) {
            ctx.body = {
                status: 'success'
            }
        } else {
            ctx.status = 404;
            ctx.body = {
                status: 'fail'
            }
        }
    },

}