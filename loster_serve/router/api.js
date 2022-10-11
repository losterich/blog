// 导入express模块
const express = require('express')

// 创建路由对象
const router = express.Router()

// 路由处理函数模块
const cate_Handler = require('../router_handler/cate')
const essay_Handler = require('../router_handler/essay')
const get_info = require('../router_handler/info')

// 获取文章分类路由
router.post('/cate/get_cates',cate_Handler.get_cates)

// 获取文章路由
router.post('/essay/get_essays',essay_Handler.get_essays)

// 获取站点信息
router.post('/get_websiteInfo', get_info.get_websiteInfo)

// 获取箴言
router.post('/get_mottos', get_info.get_mottos)

// 导出路由对象
module.exports = router