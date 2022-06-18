import Mock from 'mockjs'
import dataApi from './mockServeData/staticData.js'
// 模拟接口
Mock.mock('/api/header',dataApi.headerData)
Mock.mock('/api/essay',dataApi.essayData)