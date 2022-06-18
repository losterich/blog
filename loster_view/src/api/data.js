import axios from './axios'
                                                                                                                                                                                                                                                   
// 接口调用
export const headerData= (param)=>{
    return axios.request({
        url: '/api/header',
        method: 'post',
        data: param ,
    })
}

export const getData = ()=>{
    console.log('拦截')
    return axios.request({
        url: '/home/getData',
        // 默认get请求
    })
}