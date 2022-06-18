import Vue from 'vue'
import Vuex from 'vuex'

// 注册插件
Vue.use(Vuex)

// 请求数据
import data from './data'
export default new Vuex.Store({
   modules:{
        data
   }
})