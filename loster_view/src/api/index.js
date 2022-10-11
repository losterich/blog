import axios from 'axios'

const http = axios.create({
    baseURL: 'http://192.168.2.170:9999/api',
    headers: {'Content-Type': 'application/json'}, 
})

// 获取站点信息
export const get_websiteInfo = () => {
    return http.post('/get_websiteInfo')
}
// 获取箴言
export const get_mottos = () => {
    return http.post('/get_mottos')
}

// 文章相关接口
export const get_essay = (params) => {
    return http.post('/essay/get_essays',{
        ...params
    })
}


// 分类相关接口
export const get_cate = (params) => {
    return http.post('/cate/get_cates',{
        ...params
    })
}



