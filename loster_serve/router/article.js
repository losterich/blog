// 导入express模块
const express = require('express')

// 创建路由对象
const router = express.Router()

// 导入路由处理函数模块
const dzbook_Handler = require('../router_handler/dzbook')

// 导入验证表单数据的中间件
const expressJoi = require('@escook/express-joi')

// 导入验证规则模块
const {login_checking} = require('../checking/checking')

// 登录路由
router.post('/login',expressJoi(login_checking),dzbook_Handler.login)

// 导出路由对象
module.exports = router