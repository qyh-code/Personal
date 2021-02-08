const router = require('koa-router')()

const { createToken } = require('../auth');

const contrller = require('../controller/user')

router.prefix('/user');

router.post('/regist', contrller.regist);

router.post('/login', contrller.login);

router.get('/wirteUser', contrller.writeUser);

module.exports = router