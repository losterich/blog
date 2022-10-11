//导入定义验证规则的包
const joi = require('joi')

//定义用户名和密码的验证规则
/**
 * string() 值必须是字符串
 * alphanum() 值只能是包含 a-zA-Z0-9 的字符串
 * min(length) 最小长度
 * max(length) 最大长度
 * required() 值是必填项，不能为 undefined
 * pattern(正则表达式) 值必须符合正则表达式的规则
 */


// 文章校验规则
const second_cate_id = joi.number().required()
const author_id = joi.number().required()
const author = joi.string().required().max(20)
const date = joi.string().required().max(50)
const title = joi.string().required().max(200)
const content = joi.string().required()


exports.essay_schema = {
    body:{
        second_cate_id,
        author_id,
        author,
        date,
        title,
        content
    }
}

