import VueRouter from 'vue-router'

// 导入组件
import Home from '../view/Home.vue'
import Essay from '../view/Essay.vue'

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
        }
    ],
})