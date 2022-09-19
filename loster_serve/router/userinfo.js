// 导入express模块
const express = require('express')

// 创建路由对象
const router = express.Router()

// 导入路由处理函数模块
const userinfo_Handler = require('../router_handler/userinfo')

// 导入验证表单数据中间件
const expressJoi = require('@escook/express-joi')

// 导入验证规则模块
const {login_checking} = require('../checking/checking')

// 添加用户路由
router.post('/adduser',expressJoi(login_checking),userinfo_Handler.addUser)

// // 删除用户路由
// router.post('/remove_user',userinfo_Handler.removeUser)

// // 更改密码，账号路由
// router.post('/update_pwd',userinfo_Handler.updatePwd)

// // 查看用户信息路由
// router.post('get_userinfo',userinfo_Handler.getUserinfo)

// // 更改用户信息路由
// router.post('/update_userinfo',userinfo_Handler.updateUserInfo)


// 导出路由
module.exports = router

