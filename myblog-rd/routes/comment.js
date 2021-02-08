const router = require('koa-router')()

const user = require('../controllers/comment');

const controller = require('../controller/comment');

router.post('/addComment', controller.addComment);