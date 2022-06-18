import Vue from 'vue'

// 按需引入elementUi组件
import {Container, Header, Main, Footer, Dropdown, DropdownItem,
    DropdownMenu, Card, Row, Col, Tag, Drawer, Collapse, CollapseItem,
    Avatar, Form, FormItem, Input, Button, Skeleton, Divider, Popover,
    Breadcrumb, BreadcrumbItem,
    } from 'element-ui'

    // elementUi 样式文件
import 'element-ui/lib/theme-chalk/index.css'
// elementUi断点隐藏
import 'element-ui/lib/theme-chalk/display.css'
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
Vue.component(Button.name, Button)
Vue.component(Skeleton.name, Skeleton)
Vue.component(Divider.name, Divider)
Vue.component(Popover.name, Popover)
Vue.component(Breadcrumb.name, Breadcrumb)
Vue.component(BreadcrumbItem.name, BreadcrumbItem)