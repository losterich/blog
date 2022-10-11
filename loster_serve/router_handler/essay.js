//导入数据库对象
const db = require('../db/index')

// 获取文章
get_essays = (request, response) => {
  const req_data = request.body

  try{
    let sql = ''
    let condition = '' 
    
    // 所有文章
    const sqlA = 'SELECT * FROM essay'
    // 获取单篇文章（文章刷新）
    const sqlB = 'SELECT * FROM essay WHERE essay_id = ?'
    // 获取分类文章
    const sqlC = 'SELECT * FROM essay WHERE second_cate_id = ?'

    if(JSON.stringify(req_data) == "{}"){
        sql = sqlA
        condition = ''
    }else if(req_data.essay_id && req_data.essay_id !== ''){
        sql = sqlB
        condition = req_data.essay_id
    }else if(req_data.second_cate_id && req_data.second_cate_id !== '' ){
        sql = sqlC
        condition = req_data.second_cate_id
    } 
    if(sql !== ''){
      db.query(sql,condition,(err, results)=>{
        if(err){
            response.cc(err)
        }else{
           response.send({
             code:'1',
             message:'success',
             data:results
           })
        }
        })
    }
    }catch(err){
       console.log(err)
    }
}
// 
// 添加文章
add_essay = (request, response) => {
  const req_data = request.body
  // 插入的文章数据初始化
  let essay_data = ''
  const sqlA = `SELECT first_cate_id, first_cate_name, second_cate_name FROM second_cate WHERE second_cate_id = ?`
  
  // 查询必要一级分类和二级分类的参数
  db.query(sqlA, req_data.second_cate_id,(err, results) =>{
    if(err){
      return response.cc(err)
    }else if(results.length === 1){
      
      essay_data = [
        results[0].first_cate_id,
        results[0].first_cate_name,
        req_data.second_cate_id,
        results[0].second_cate_name,
        req_data.author_id,
        req_data.author,
        req_data.date,
        req_data.title,
        req_data.content
      ]
    }

    const sqlB = `INSERT INTO essay 
    (first_cate_id, first_cate_name, second_cate_id, second_cate_name, author_id, author, date, title, content)
    VALUES(?,?,?,?,?,?,?,?,?)`

    db.query(sqlB, essay_data, (err, results) => {

      if(err) {
        return response.cc(err)
      } else if(results.affectedRows === 1){
        response.send({
          code:'1',
          message:'success',
          data:'文章发布成功'
        })
      } else{
        response.send({
          code:'0',
          message:'err',
          data:'文章发布失败'
        })
      }
  
    })
    
  })


}
// 编辑文章
edit_essay = (request, response) => {
    
}

// 删除文章
delete_essay = (request, response) => {

}

module.exports = {
    get_essays,
    add_essay,
    edit_essay,
    delete_essay
}