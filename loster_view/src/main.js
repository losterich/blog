import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

// 路由器
import router from './router/index'
// 打字机效果插件
import VueTypedJs from 'vue-typed-js'

// 按需引入elementUi组件
import {Container, Header, Main, Footer, Dropdown, DropdownItem,
DropdownMenu, Card, Row, Col,Tag,Drawer,Collapse ,CollapseItem,
Avatar,Form,FormItem,Input} from 'element-ui'
// elementUi 样式文件
import 'element-ui/lib/theme-chalk/index.css'
// elementUi断点隐藏
import 'element-ui/lib/theme-chalk/display.css'

// bootstrap字体图标库(前面加 bi-)
import 'bootstrap-icons/font/bootstrap-icons.css'
// animate动画库
import 'animate.css'



// 组件应用
Vue.component(Container.name, Container)
Vue.component(Header.name, Header)
Vue.component(Footer.name, Footer)
Vue.component(Main.name, Main)
Vue.component(Dropdown.name, Dropdown)
Vue.component(DropdownItem.name, DropdownItem)
Vue.component(DropdownMenu.name, DropdownMenu)
Vue.component(Card.name, Card)
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(Tag.name, Tag)
Vue.component(Drawer.name, Drawer)
Vue.component(Collapse.name, Collapse)
Vue.component(CollapseItem.name, CollapseItem)
Vue.component(Avatar.name, Avatar)
Vue.component(Form.name, Form)
Vue.component(FormItem.name, FormItem)
Vue.component(Input.name, Input)


Vue.config.productionTip = false

// 插件注册
Vue.use(VueRouter)
Vue.use(VueTypedJs)

new Vue({
  router,
  render: h => h(App),
  beforeCreate() {
      Vue.prototype.$bus = this // 安装全局事件总线
  },
}).$mount('#app')
