<template>
    <div id="app">
   <keep-alive><router-view></router-view></keep-alive>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'App',
  mounted(){
     // 执行vuex中的方法，请求菜单数据,并刷新sessionStorage
     this.get_menu()
     this.get_info()
  },
  methods:{
    // 获取vuex请求菜单数据的方法
    ...mapActions('data',['get_menu', 'get_info']),
  }

}
</script>
