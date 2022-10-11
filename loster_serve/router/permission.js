// 导入express模块
const express = require('express')

// 创建路由对象
const router = express.Router()

//导入验证表单数据的中间件
const expressJoi = require('@escook/express-joi')

// 导入校验规则
const {essay_schema} = require('../schema/essay.js')

const essay_Handler = require('../router_handler/essay')

router.post('/essay/add_essay', expressJoi(essay_schema), essay_Handler.add_essay)

// 导出路由对象
module.exports = router