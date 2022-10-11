
// 导入express模块
const express = require('express')

// 创建服务器实例
const app = express()

// 导入cors跨域模块
const cors = require('cors')
app.use(cors())//将cors注册为全局中间件

// 导入解析token的包
const expressJWT = require('express-jwt')

// json 
app.use(express.json())
// 导入验证模块
const joi = require('joi')

// 导入token秘钥配置文件
const config = require('./config')


// 向客户端响应处理失败的结果的全局中间件
app.use((req,res,next) => {
        //code = 1为成功 code = 0为失败。默认将code的值设置为1
        res.cc =  (err,code = 0) => {
            res.send({
                //状态
                code,
                //状态描述，判断err是错误对象，还是字符串
                message:err instanceof Error ? err.message:err//*** *
            })
        }
    
        next()
    })
    
// // 使用 .unless({ path: [/^\/api\//] }) 指定哪些接口不需要进行 Token 的身份认证(要在res.cc函数以下，不然会报错)
// app.use(expressJWT({ secret: config.jwtSecretKey }).unless({ path: [/^\/api\//] })) 

//导入路由模块
const api_router = require('./router/api')
const permission_router = require('./router/permission')
//注册路由
app.use('/api',api_router)
app.use('/permission', permission_router)


// 错误中间件（记得参数要写全）
app.use((err, req, res, next) => {
   
        // 提交的数据验证失败
        if(err instanceof joi.ValidationError) return res.cc(err)
    
        // 捕获身份认证失败的错误
        if (err.name === 'UnauthorizedError') return res.cc('身份认证失败！')
    
        // 未知错误
        res.cc(err)
        console.log(err)
        
    })


const port = 9999
// 启动服务器
app.listen(port,() => {
    console.log('服务器启动成功:\nhttp://127.0.0.1:' + port)
})