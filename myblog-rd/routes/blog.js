const router = require('koa-router')();

router.prefix('/blog');

const { verifyToken } = require('../auth');

const controller = require('../controller/blog');

router.post('/goarticle', controller.postBlog);

router.get('/list', controller.getBlogList);

router.get('/detail', controller.getBlogById);

router.get('/delete', controller.deleteBlog);

module.exports = router