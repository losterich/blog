<template>
    <div id="app">
    <el-container :style="{backgroundImage:'url('+require('./assets/bg3.jpg')+')'}">
    <el-main>

    <el-header>
    <Header></Header>
    </el-header>

    <router-view></router-view>

    <Drawer></Drawer>

    <BackTop></BackTop> 

    </el-main>

    <el-footer>Footer</el-footer>
    
    </el-container>
    </div>
</template>

<script>

// 导入组件
import Home from './view/Home.vue'
import Header from './components/Header.vue'
import Drawer from './components/Drawer.vue'
import BackTop  from './components/BackTop.vue'

export default {
  name: 'App',
  components: {
      Home,
      Header,
      Drawer,
      BackTop,
  }
}
</script>
<style>

* {
    margin: 0;
    padding: 0;
    transition: all 0.5s;
    scroll-behavior: smooth;
}

html {
    font-size: 100%;
    
}

@media screen and (min-width:992px) {
    /* 全局滚动条样式 */
::-webkit-scrollbar {
    width: 10px;
    height: 10px;
}

::-webkit-scrollbar-thumb {
    background-color: #16ADF7;
    border-radius: 5px;
}
}


.el-container {
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    min-height: 100vh;   
}

.el-header, .el-footer {
    background-color: #B3C0D1;
    color: white;
    text-align: center;
    line-height: 60px;
    padding: 0 !important;
    background: #212121; 
}

.el-footer{
    margin-top: 30px;
    height: 100px !important;
}

.el-header {
    position:fixed;
    width: 100%;
    transition:all .4s;
    background-color: rgba(0, 0, 0, 0);
    z-index: 2;
}
.el-main {
    background: #ced0d100;
    color: #333;
    text-align: center;
    line-height: 160px;
    padding: 0 !important;
  
}
/* 去边框 */
.el-collapse-item .el-collapse-item__wrap,.el-collapse-item__header{
  border:none !important;
}

/* 全局去除a标签在移动端点击后显示蓝底 */
a{
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -webkit-user-select: none;
    -moz-user-focus: none;
    -moz-user-select: none;
}

</style>