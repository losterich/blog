import Vue from 'vue'
import VueRouter from 'vue-router'

// 注册
Vue.use(VueRouter)

// 导入组件
import Home from '../view/Home.vue'
import Essay from '../view/Essay.vue'
import Cates from '../view/Cates.vue'

export default new VueRouter({
    mode:'history',
    routes:[
        {
            path: '/',
            component:Home
        },
        {
            path: '/essay',
            component:Essay
        },
        {
            path: '/cates',
            component:Cates
        }
    ],
})