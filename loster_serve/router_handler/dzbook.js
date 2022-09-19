// 导入数据库对象
const db = require('../db/index')

//导入bcryptjs密码加密包
const bcrypt = require('bcryptjs')

// 导入生成token的包
const jwt = require('jsonwebtoken')

//导入token配置文件
const config = require('../config')

// 登录路由处理函数
const login = (req,res) => {
    // 表单提交的数据
    const user_login = req.body
    // 定义sql语句
    const sql = 'select * from  users where account=?'

    // 验证用户名和密码
    db.query(sql,user_login.account,(err,results) => {
        if(err) return res.cc(err)// 执行sql语句失败

        if(!results.length == 1) return res.cc('登录失败！')// 执行sql语句成功，但是查询条数不唯一

        const compareResult = bcrypt.compareSync(user_login.password,results[0].password)// 判断用户输入的登录密码是否和数据库中的密码一致

        // 如果对比的结果等于 false, 则证明用户输入的密码错误
        if(!compareResult) {
            return res.cc('账户或密码不正确')
        }

        // 密码正确，生成token字符串，返回给客户端
        const user = {...results[0],password:'蛇皮',user_pic:'走位'}

        // 生成 Token 字符串
        const tokenStr = jwt.sign(user, config.jwtSecretKey, {
            expiresIn: '24h', // token 有效期为 24 个小时
        })

        // 将token字符串发送给客户端
        return res.send({
            status:'0',
            message:'登录成功',
            token:'Bearer ' + tokenStr //要加上Bearer ，同时Bearer后面要加空格，不然身份认证会失败
        })

    })


}


// 导出路由处理函数
module.exports = {
    login
}