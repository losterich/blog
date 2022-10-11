//导入数据库对象
const db = require('../db/index')

// 获取站点信息
const get_websiteInfo = (request, response) => {
    const sql = 'SELECT * FROM website_info'

    db.query(sql, (err, results) =>{
        if(err){
            return response.cc(err)
        }else{
            response.send({
                code:'1',
                message:'查询成功',
                data:results
            })
        }
    })
}

// 获取箴言
const get_mottos = (request, response) => {
    const sql = 'SELECT * FROM mottos'
    db.query(sql, (err ,results) =>{
        if(err){
            response.cc(err)
        }else{
            response.send({
                code:'1',
                message:'查询成功',
                data:results
            })
        }
    })
}

module.exports = {
    get_websiteInfo,
    get_mottos
}