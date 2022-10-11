import Vue from 'vue'
import VueRouter from 'vue-router'

// 注册
Vue.use(VueRouter)

// 导入组件
import Essay from '../view/Essay.vue'
import Cates from '../view/Cates.vue'

export default new VueRouter({
    mode:'history',
    routes:[
        {
            path: '/',
            component:() => import('../view/Main.vue'),
            children:[
                {
                    path: '/',
                    component:() => import('../view/Home.vue')
                },
                {   
                    name:'essay',
                    path: '/essay',
                    component:Essay
                },
                {   
                    name:'cates',
                    path: '/cates',
                    component:Cates
                }
            ],
        },
       
    ],
})