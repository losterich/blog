// 导入axios
import axios from 'axios'

// 导入配置文件
import config from '../config/index'

// 判断当前的运行环境(开发环境，生产环境)
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

// axios工具类
class HttpRequest{
    // 初始化
    constructor(baseUrl){
        this.baseUrl = baseUrl // 属性挂载
    }
    
    // 定义axios的相关配置
    getInsideConfig(){
        const config ={
            baseUrl: this.baseUrl,
            headers:{} // 请求头信息
        }
        return config
    }

    // 拦截器
    interceptors(instance) {
        // 添加请求拦截器
        axios.interceptors.request.use(function (config) {
            // 在发送请求之前做些什么
            return config;
        }, function (error) {
            // 对请求错误做些什么
            return Promise.reject(error);
        });

        // 添加响应拦截器
        axios.interceptors.response.use(function (response) {
            // 对响应数据做点什么
            return response;
        }, function (error) {
            // 对响应错误做点什么
            return Promise.reject(error);
        });
    }

    // 请求函数
    request(options){
        // 创建axios实例
        const instance = axios.create()
        options = {...this.getInsideConfig(),...options}

        this.interceptors(options) // 使用拦截器
        
        return instance(options)
    }
}

// 导出实例，并传入参数
export default new HttpRequest(baseUrl)