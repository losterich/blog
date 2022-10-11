//导入数据库对象
const db = require('../db/index')

// 获取分类
const get_cates = (request, response) => {
  const req_data = request.body  
  const sqlA = 'SELECT * FROM first_cate'
  const sqlB= 'SELECT * FROM second_cate'
  let first_cate = ''
  let second_cate = ''

  db.query(sqlA,(err, results) => {
    if(err){
    return response.cc(err)
  }else{
    first_cate = results
  }
  })
  
  db.query(sqlB,(err, results) => {
    if(err){
      return response.cc(err)
  }else{
    try{
        second_cate = results
        if(first_cate){
          // 菜单数据组合
        first_cate.forEach(itemA =>{
          itemA.children = []
        second_cate.forEach(item =>{
          if(itemA.first_cate_id == item.first_cate_id){
            itemA.children.push(item)
          }
        })
        })
    
        // 去除空数组
        first_cate.forEach(item =>{
         if(item.children.length === 0){
           Reflect.deleteProperty(item,'children')
         }
        })
        }
        const menu_data = first_cate
        response.send({
          code:'1',
          message:'success',
          data:menu_data
        })
    }catch(err){
        console.log(err)
    }

    }
    })
    
 

}

// 添加分类

// 修改分类

// 删除分类


module.exports ={
    get_cates,

}