import Vue from 'vue'
import App from './App.vue'

import store from './store/index'

// 路由器
import router from './router/index'
// 打字机效果插件
import VueTypedJs from 'vue-typed-js'

// elementUi组件
import './element-ui/index'
// bootstrap字体图标库(前面加 bi-)
import 'bootstrap-icons/font/bootstrap-icons.css'
// animate动画库
import 'animate.css'

 
Vue.config.productionTip = false

// 插件注册
Vue.use(VueTypedJs)

// 导入axios
import http from 'axios'
// 全局绑定axios
Vue.prototype.$http = http


// 代码高亮
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css' //样式

//创建v-highlight全局指令
Vue.directive('highlight',function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block)=>{
    hljs.highlightBlock(block)
  })
})

new Vue({
  // 对象挂载，以便使用对象里的属性
  router,
  store,
  render: h => h(App),
  beforeCreate() {
      Vue.prototype.$bus = this // 安装全局事件总线
  },
}).$mount('#app')
