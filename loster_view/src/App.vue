<template>
  <div id="app">
      <Home></Home>
      <Drawer></Drawer>
  </div>
</template>

<script>

// 导入组件
import Home from './view/Home.vue'
import Drawer from './components/Drawer.vue'

export default {
  name: 'App',
  components: {
      Home,
      Drawer
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

</style>