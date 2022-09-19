//导入数据库对象
const db = require('../db/index')

//导入bcryptjs密码加密包
const bcrypt = require('bcryptjs')

// 添加用户路由处理函数
const addUser = (req,res) => {
    const userAdd = req.body

    const sql = 'select * from  users where account=?'// 定义sql语句

    // 查询账号是否重复
    db.query(sql,userAdd.account,(err,results) => {
        if(err) return res.cc(err)// 执行sql语句失败

        if(results.length > 0) return res.cc('用户名被占用')

        //用户名可用
        //密码加密
        // bcrypt.hashSync(明文密码, 随机盐的长度) 方法，对用户的密码进行加密处理
        // 对用户的密码,进行 bcrype 加密，返回值是加密之后的密码字符串
        userAdd.password = bcrypt.hashSync(userAdd.password, 10)

        
        const sqlStr = 'insert into users set ?'// 定义sql语句
        //插入数据
        db.query(sqlStr,{account:userAdd.account,password:userAdd.password},(err,results) => {
            if(err) return res.cc(err)

            if(results.affectedRows !== 1) return res.cc('添加用户失败')

            return res.send({
                status:'0',
                message:'添加用户成功！'
            })
        }) 

        
    })
}


// 导出路由处理函数
module.exports = {
    addUser,
}